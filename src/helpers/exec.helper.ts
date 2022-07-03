import { spawn } from "child_process";
import shell from "shelljs";

export class CommandException extends Error {
  commandSTDException: string;

  constructor(readonly commandOut: shell.ShellString, command: string) {
    super(`Command exited with nonzero out: ${command}`);
    this.commandSTDException = commandOut.stderr;
  }
}

export const execCmd = (
  command: string,
  options?: shell.ExecOptions & { async?: false | undefined }
) => {
  let commandOut;

  if (options) {
    commandOut = shell.exec(command, options);
  } else {
    commandOut = shell.exec(command);
  }

  if (commandOut.code != 0) {
    throw new CommandException(commandOut, command);
  }

  return commandOut;
};
export const execCmdDetached = (commandString: string) => {
  const spaceSplitCommand = commandString.split(" ");
  const command = spaceSplitCommand.shift() as string;

  const childProcess = spawn(command, spaceSplitCommand, {
    detached: true,
  });

  const kill = () => {
    if (childProcess.pid) {
      process.kill(-childProcess.pid);
    }
  };

  return { kill, childProcess };
};
