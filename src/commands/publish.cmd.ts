import { createCommand } from "commander";
import fs from "fs-extra";
import { get } from "lodash";
import path from "path";
import shell from "shelljs";
import { zipFolderContents } from "../helpers/archive.helper";
import { execCmd, execCmdDetached } from "../helpers/exec.helper";
import { prepareAction } from "../helpers/prepare-action.helper";
import { responseSDK } from "../helpers/sdk.helper";
import { validateSchema } from "../helpers/validate-schema.helper";
import { publishSchema } from "../validators/publish.validatior";

import { getMeshSDK } from "./../mesh/.mesh";
export const publish = createCommand("publish");

publish
  .option("-n --name <name>", "name of application")
  .option("-c --cwd <path>", "Base nx path")
  .action(
    prepareAction(async function (options: any) {
      options = await validateSchema(publishSchema, options);

      const currentDir = get(options, "cwd") || shell.pwd().toString();

      const applicationName = get(options, "name");

      const sdk = getMeshSDK();

      const workspaceJsonObj = await fs.readJson(
        path.join(currentDir, "workspace.json")
      );

      const applicationPath = get(
        workspaceJsonObj,
        `projects.${applicationName}`
      );

      const distPath = path.join("dist", applicationPath);

      const proxyChildProcess = execCmdDetached("kubectl -n fission proxy");

      execCmd(`nx run ${applicationName}:build`);

      const zipPath = path.join(distPath, "..", `${applicationName}.zip`);

      await zipFolderContents(distPath, zipPath);
      //   nx run backend-main:build
      try {
        responseSDK(await sdk.getEnvironment({ environment: "nodejs" }));
      } catch (error) {
        // sdk.createEnvironments({
        //   object:{}
        // })
        execCmd(
          "fission environment create --name nodejs --image fission/node-env --builder fission/node-builder"
        );
      }

      try {
        responseSDK(await sdk.deleteFunction({ function: applicationName }));
        // execCmd(`fission fn delete --name ${applicationName}`, {
        //   silent: true,
        // });
      } catch (error) {}

      try {
        responseSDK(await sdk.deletePackage({ package: applicationName }));

        // execCmd(`fission package delete --name ${applicationName}`, {
        //   silent: true,
        // });
      } catch (error) {}
      console.log("zipPath", zipPath);
      execCmd(
        `fission package create --src ${zipPath}  --env nodejs --name ${applicationName}`
      );

      execCmd(
        `fission function create --name ${applicationName} --pkg ${applicationName} --env nodejs --entrypoint "src/main"`
      );

      proxyChildProcess.kill();
    })
  );
