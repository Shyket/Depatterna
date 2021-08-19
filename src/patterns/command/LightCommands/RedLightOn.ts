import { Command } from "../Command";
import { RedLight } from "../Receivers/RedLight";

export class RedLightOn implements Command {
  light: RedLight;

  constructor(light: RedLight) {
    this.light = light;
  }

  execute(): string {
    return this.light.on();
  }
}
