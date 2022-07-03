import { createCommand } from 'commander';
import fs from 'fs-extra';
import { get } from 'lodash';
import path from 'path';
import shell from 'shelljs';
import { zipFolderContents } from '../helpers/archive.helper';
import { execCmd } from '../helpers/exec.helper';
import { prepareAction } from '../helpers/prepare-action.helper';
export const publish = createCommand('publish');

publish
  .option('-n --name <name>', 'name of application')
  .option('-c --cwd <path>', 'Base nx path')
  .action(
    prepareAction(async function (options: any) {
      const currentDir = get(options, 'cwd') || shell.pwd().toString();

      const applicationName = get(options, 'name');
      const workspaceJsonObj = await fs.readJson(
        path.join(currentDir, 'workspace.json')
      );
      const applicationPath = get(
        workspaceJsonObj,
        `projects.${applicationName}`
      );
      const distPath = path.join('dist', applicationPath);

      execCmd(`nx run ${applicationName}:build`);

      const zipPath = path.join(distPath, '..', `${applicationName}.zip`);

      await zipFolderContents(distPath, zipPath);
      //   nx run backend-main:build
      try {
        execCmd(`fission fn delete --name ${applicationName}`, {
          silent: true,
        });
      } catch (error) {}

      try {
        execCmd(`fission package delete --name ${applicationName}`, {
          silent: true,
        });
      } catch (error) {}
      console.log('zipPath', zipPath);
      execCmd(
        `fission package create --src ${zipPath}  --env node-chrome --name ${applicationName}`
      );

      execCmd(
        `fission function create --name ${applicationName} --pkg ${applicationName} --env node-chrome --entrypoint "src/main"`
      );
    })
  );
