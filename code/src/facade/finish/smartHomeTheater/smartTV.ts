export class SmartTV {
  private status: string = "off";
  private input: string = "tv";
  private pictureMode: string = "standard";

  turnOn() {
    this.status = "on";
  }

  turnOff() {
    this.status = "off";
  }

  setInput(input: string) {
    this.input = input;
  }

  setPictureMode(mode: string) {
    this.pictureMode = mode;
  }

  currentStatus(): string {
    if (this.status === "off") {
      return `TV: ${this.status}`;
    }
    return `TV: ${this.status}, input: ${this.input}, picture mode: ${this.pictureMode}`;
  }
}
