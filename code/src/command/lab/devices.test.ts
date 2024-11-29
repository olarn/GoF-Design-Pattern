import { Light, GardenLight, GarageDoor, Hottub, SmartVacuum } from './devices';

describe('Devices', () => {
  it('should execute Light methods', () => {
    const light = new Light();
    expect(() => {
      light.on();
      light.off();
    }).not.toThrow();
  });

  it('should execute GardenLight methods', () => {
    const gardenLight = new GardenLight();
    expect(() => {
      gardenLight.on();
      gardenLight.off();
      gardenLight.dim();
    }).not.toThrow();
  });

  it('should execute GarageDoor methods', () => {
    const garageDoor = new GarageDoor();
    expect(() => {
      garageDoor.up();
      garageDoor.down();
      garageDoor.stop();
      garageDoor.lightOn();
      garageDoor.lightOff();
    }).not.toThrow();
  });

  it('should execute Hottub methods', () => {
    const hottub = new Hottub();
    expect(() => {
      hottub.circulate();
      hottub.jetsOn();
      hottub.jetOff();
      hottub.setTemperature(38);
    }).not.toThrow();
  });

  it('should execute SmartVacuum methods', () => {
    const smartVacuum = new SmartVacuum();
    expect(() => {
      smartVacuum.on();
      smartVacuum.off();
      smartVacuum.setSpeed(2);
      smartVacuum.setTimer(60);
      smartVacuum.setMode('auto');
      smartVacuum.setSchedule('daily');
    }).not.toThrow();
  });
});
