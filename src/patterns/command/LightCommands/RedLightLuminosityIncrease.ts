import { Command } from "../Command";
import { RedLight } from "../Receivers/RedLight";

export class RedLightIncreaseLuminosity implements Command {
  light: RedLight;

  constructor(light: RedLight) {
    this.light = light;
  }

  execute(): string {
    return this.light.increaseLuminosity();
  }
}
