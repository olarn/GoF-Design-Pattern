import { SmartBulb } from "./smartHomeTheater/smartBulb";
import { SmartSpeaker } from "./smartHomeTheater/smartSpeaker";
import { SmartTV } from "./smartHomeTheater/smartTV";

export class SmartHomeTheater {
  private tv = new SmartTV();

  private frontLeftSpeaker = new SmartSpeaker("Front Left");
  private frontRightSpeaker = new SmartSpeaker("Front Right");
  private subwoofer = new SmartSpeaker("Subwoofer");

  private livingRoomBulb1 = new SmartBulb("Living Room Bulb 1");
  private livingRoomBulb2 = new SmartBulb("Living Room Bulb 2");
  private livingRoomDownloght = new SmartBulb("Living Room Down Light");

  watchMovie() {
    this.tv.turnOn();
    this.tv.setInput("hdmi1");
    this.tv.setPictureMode("movie");

    this.frontLeftSpeaker.turnOn();
    this.frontLeftSpeaker.setVolume(10);
    this.frontLeftSpeaker.setBase(5);
    this.frontLeftSpeaker.setTriple(5);

    this.frontRightSpeaker.turnOn();
    this.frontRightSpeaker.setVolume(10);
    this.frontRightSpeaker.setBase(5);
    this.frontRightSpeaker.setTriple(5);

    this.subwoofer.turnOn();
    this.subwoofer.setVolume(10);
    this.subwoofer.setBase(5);
    this.subwoofer.setTriple(5);

    this.livingRoomBulb1.turnOn();
    this.livingRoomBulb1.setColor("yellow");
    this.livingRoomBulb1.setBrightness(50);

    this.livingRoomBulb2.turnOn();
    this.livingRoomBulb2.setColor("yellow");
    this.livingRoomBulb2.setBrightness(50);

    this.livingRoomDownloght.turnOn();
    this.livingRoomDownloght.setColor("orange");
    this.livingRoomDownloght.setBrightness(50);
  }

  currentStatus(): string {
    return (
      `${this.tv.currentStatus()}\n` +
      `${this.frontLeftSpeaker.currentStatus()}\n` +
      `${this.frontRightSpeaker.currentStatus()}\n` +
      `${this.subwoofer.currentStatus()}\n` +
      `${this.livingRoomBulb1.currentStatus()}\n` +
      `${this.livingRoomBulb2.currentStatus()}\n` +
      `${this.livingRoomDownloght.currentStatus()}`
    );
  }

  leave() {
    this.tv.turnOff();
    this.frontLeftSpeaker.turnOff();
    this.frontRightSpeaker.turnOff();
    this.subwoofer.turnOff();
    this.livingRoomBulb1.turnOff();
    this.livingRoomBulb2.turnOff();
    this.livingRoomDownloght.turnOff();
  }
}
