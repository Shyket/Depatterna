import { Command } from "../Command";
import { Light } from "../Receivers/Light";

export class LightOn implements Command {
  private _light: Light;

  constructor(_light: Light) {
    this._light = _light;
  }

  execute(): string {
    return this._light.on();
  }
}
