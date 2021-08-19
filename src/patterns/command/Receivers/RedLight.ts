var intensity: number = 0;

export class RedLight {
  public on(): string {
    //intensity=0;
    return `red${intensity}`;
  }

  public off(): string {
    return "off";
  }

  public increaseLuminosity(): string {
    intensity++;
    return `red${intensity}`;
  }

  public decreaseLuminosity(): string {
    intensity--;
    return `red${intensity}`;
  }
}
