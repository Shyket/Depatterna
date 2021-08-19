import { handleCommand } from "../pages/hello-command/CommandHandler";
import { CommandInvoker } from "patterns/command/CommandInvoker";
import { RedLightOn } from "patterns/command/LightCommands/RedLightOn";
import { LightOn } from "patterns/command/LightCommands/LightOn";
import { Light } from "patterns/command/Receivers/Light";
import { RedLight } from "patterns/command/Receivers/RedLight";
import { LightOff } from "patterns/command/LightCommands/LigthOff";

const commandInvoker = new CommandInvoker();

describe("Light Command Pattern", () => {
  test("on", () => {
    let expectation = handleCommand(new LightOn(new Light()));
    commandInvoker.setCommand(new LightOn(new Light()));
    let reality = commandInvoker.executeCommand();
    expect(expectation).toEqual(reality);
  });
  test("off", () => {
    let expectation = handleCommand(new LightOff(new Light()));
    commandInvoker.setCommand(new LightOff(new Light()));
    let reality = commandInvoker.executeCommand();
    expect(expectation).toEqual(reality);
  });
  test("red", () => {
    let expectation = handleCommand(new RedLightOn(new RedLight()));
    commandInvoker.setCommand(new RedLightOn(new RedLight()));
    let reality = commandInvoker.executeCommand();
    expect(expectation).toEqual(reality);
  });

});
