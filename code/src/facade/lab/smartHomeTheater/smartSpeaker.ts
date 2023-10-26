export class SmartSpeaker {
  private name: string = "";
  private status: string = "off";
  private volume: number = 0;
  private base: number = 0;
  private triple: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  turnOn() {
    this.status = "on";
  }

  turnOff() {
    this.status = "off";
  }

  setVolume(volume: number) {
    this.volume = volume;
  }

  setBase(base: number) {
    this.base = base;
  }

  setTriple(triple: number) {
    this.triple = triple;
  }

  currentStatus(): string {
    if (this.status === "off") {
      return `Speaker: ${this.name} is ${this.status}`;
    }
    return `Speaker: ${this.name} is ${this.status}, volume: ${this.volume}, base: ${this.base}, triple: ${this.triple}`;
  }
}
