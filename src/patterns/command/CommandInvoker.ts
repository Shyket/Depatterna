import { Command } from "./Command";

export class CommandInvoker {
  command!: Command;

  constructor() {}

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    return this.command.execute();
  }
}
