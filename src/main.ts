import { program } from "commander";
import { publish } from "./commands/publish.cmd";

program.version("0.0.1");

program.addCommand(publish);

program.parse(process.argv);
