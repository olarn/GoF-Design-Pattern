import { SmartBulb } from "./smartHomeTheater/smartBulb";
import { SmartSpeaker } from "./smartHomeTheater/smartSpeaker";
import { SmartTV } from "./smartHomeTheater/smartTV";

describe('Smart Home Theater', () => {
    it('should be setup for see the drama movie', () => {
        const tv = new SmartTV();

        const frontLeftSpeaker = new SmartSpeaker('Front Left');
        const frontRightSpeaker = new SmartSpeaker('Front Right');
        const subwoofer = new SmartSpeaker('Subwoofer');

        const livingRoomBulb1 = new SmartBulb('Living Room Bulb 1');
        const livingRoomBulb2 = new SmartBulb('Living Room Bulb 2');
        const livingRoomDownloght = new SmartBulb('Living Room Down Light');

        tv.turnOn();
        tv.setInput('hdmi1');
        tv.setPictureMode('movie');

        frontLeftSpeaker.turnOn();
        frontLeftSpeaker.setVolume(10);
        frontLeftSpeaker.setBase(5);
        frontLeftSpeaker.setTriple(5);

        frontRightSpeaker.turnOn();
        frontRightSpeaker.setVolume(10);
        frontRightSpeaker.setBase(5);
        frontRightSpeaker.setTriple(5);

        subwoofer.turnOn();
        subwoofer.setVolume(10);
        subwoofer.setBase(5);
        subwoofer.setTriple(5);

        livingRoomBulb1.turnOn();
        livingRoomBulb1.setColor('yellow');
        livingRoomBulb1.setBrightness(50);

        livingRoomBulb2.turnOn();
        livingRoomBulb2.setColor('yellow');
        livingRoomBulb2.setBrightness(50);

        livingRoomDownloght.turnOn();
        livingRoomDownloght.setColor('orange');
        livingRoomDownloght.setBrightness(50);

        expect(tv.currentStatus()).toEqual('TV: on, input: hdmi1, picture mode: movie');
        expect(frontLeftSpeaker.currentStatus()).toEqual('Speaker: Front Left is on, volume: 10, base: 5, triple: 5');
        expect(frontRightSpeaker.currentStatus()).toEqual('Speaker: Front Right is on, volume: 10, base: 5, triple: 5');
        expect(subwoofer.currentStatus()).toEqual('Speaker: Subwoofer is on, volume: 10, base: 5, triple: 5');
        expect(livingRoomBulb1.currentStatus()).toEqual('Bulb: Living Room Bulb 1 is on, color: yellow, brightness: 50');
        expect(livingRoomBulb2.currentStatus()).toEqual('Bulb: Living Room Bulb 2 is on, color: yellow, brightness: 50');
        expect(livingRoomDownloght.currentStatus()).toEqual('Bulb: Living Room Down Light is on, color: orange, brightness: 50');

        tv.turnOff();
        frontLeftSpeaker.turnOff();
        frontRightSpeaker.turnOff();
        subwoofer.turnOff();
        livingRoomBulb1.turnOff();
        livingRoomBulb2.turnOff();
        livingRoomDownloght.turnOff();

        expect(tv.currentStatus()).toEqual('TV: off');
        expect(frontLeftSpeaker.currentStatus()).toEqual('Speaker: Front Left is off');
        expect(frontRightSpeaker.currentStatus()).toEqual('Speaker: Front Right is off');   
        expect(subwoofer.currentStatus()).toEqual('Speaker: Subwoofer is off');
        expect(livingRoomBulb1.currentStatus()).toEqual('Bulb: Living Room Bulb 1 is off');
        expect(livingRoomBulb2.currentStatus()).toEqual('Bulb: Living Room Bulb 2 is off');
        expect(livingRoomDownloght.currentStatus()).toEqual('Bulb: Living Room Down Light is off');
    });
});