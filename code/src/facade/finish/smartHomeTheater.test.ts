import { SmartHomeTheater } from './smartHomeTheater';
import { SmartBulb } from './smartHomeTheater/smartBulb';
import { SmartSpeaker } from './smartHomeTheater/smartSpeaker';
import { SmartTV } from './smartHomeTheater/smartTV';

describe('Smart Home Theater', () => {
  const expectedOnStatus =
    'TV: on, input: hdmi1, picture mode: movie\n' +
    'Speaker: Front Left is on, volume: 10, base: 5, triple: 5\n' +
    'Speaker: Front Right is on, volume: 10, base: 5, triple: 5\n' +
    'Speaker: Subwoofer is on, volume: 10, base: 5, triple: 5\n' +
    'Bulb: Living Room Bulb 1 is on, color: yellow, brightness: 50\n' +
    'Bulb: Living Room Bulb 2 is on, color: yellow, brightness: 50\n' +
    'Bulb: Living Room Down Light is on, color: orange, brightness: 50';

  const expectedOffStatus =
    'TV: off\n' +
    'Speaker: Front Left is off\n' +
    'Speaker: Front Right is off\n' +
    'Speaker: Subwoofer is off\n' +
    'Bulb: Living Room Bulb 1 is off\n' +
    'Bulb: Living Room Bulb 2 is off\n' +
    'Bulb: Living Room Down Light is off';

  it('should be setup for see the drama movie', () => {
    const homeTheater = new SmartHomeTheater();

    homeTheater.watchMovie();
    expect(homeTheater.currentStatus()).toEqual(expectedOnStatus);

    homeTheater.leave();
    expect(homeTheater.currentStatus()).toEqual(expectedOffStatus);
  });
});
