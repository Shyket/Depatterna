import { Command } from "patterns/command/Command";
import { CommandInvoker } from "patterns/command/CommandInvoker";
import { RedLightOn } from "patterns/command/LightCommands/RedLightOn";
import { LightOn } from "patterns/command/LightCommands/LightOn";
import { Light } from "patterns/command/Receivers/Light";
import { RedLight } from "patterns/command/Receivers/RedLight";
import { RedLightOff } from "patterns/command/LightCommands/RedLightOff";
import { LightOff } from "patterns/command/LightCommands/LigthOff";
import { RedLightIncreaseLuminosity } from "patterns/command/LightCommands/RedLightLuminosityIncrease";
import { RedLightDecreaseLuminosity } from "patterns/command/LightCommands/RedLightLuminosityDecrease";

let redLight: boolean = false;

export function handleCommand(command: Command): string {
  const commandInvoker = new CommandInvoker();
  commandInvoker.setCommand(command);

  return commandInvoker.executeCommand();
}

export function makeCommand(command: string): string {
  let result: string;
  result="";

  switch (command) {
    case "on":
      result = redLight
        ? handleCommand(new RedLightOn(new RedLight()))
        : handleCommand(new LightOn(new Light()));
      break;

    case "off":
      redLight = false;
      result = redLight
        ? handleCommand(new RedLightOff(new RedLight()))
        : handleCommand(new LightOff(new Light()));
      break;

    case "increase":
      result = redLight
        ? handleCommand(new RedLightIncreaseLuminosity(new RedLight()))
        : handleCommand(new LightOn(new Light()));

      break;

    case "decrease":
      result = redLight
        ? handleCommand(new RedLightDecreaseLuminosity(new RedLight()))
        : handleCommand(new LightOn(new Light()));
      break;

    case "red":
      redLight = true;
      result = 
         handleCommand(new RedLightOn(new RedLight()))
      break;
    default:
  }

  return result;
}
