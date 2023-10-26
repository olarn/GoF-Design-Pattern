export class SmartBulb {
  private name: string = "";
  private status: string = "off";
  private color: string = "white";
  private brightness: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  turnOn() {
    this.status = "on";
  }

  turnOff() {
    this.status = "off";
  }

  setColor(color: string) {
    this.color = color;
  }

  setBrightness(brightness: number) {
    this.brightness = brightness;
  }

  currentStatus(): string {
    if (this.status === "off") {
      return `Bulb: ${this.name} is ${this.status}`;
    }
    return `Bulb: ${this.name} is ${this.status}, color: ${this.color}, brightness: ${this.brightness}`;
  }
}
