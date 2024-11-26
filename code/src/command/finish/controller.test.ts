import { GarageDoor } from '../begin/devices';
import {
  GarageDoorDownCommand,
  GarageDoorUpCommand,
} from './command/garageDoorUpCommand';
import { LightOffCommand, LightOnCommand } from './command/lightCommand';
import { Controller } from './controller';
import { Light } from './devices';

describe('[Command - finish] Controller', () => {
  const controller = new Controller();

  it('should turn on and off light with controller', () => {
    // light on
    const light = new Light();
    jest.spyOn(light, 'on');
    jest.spyOn(light, 'off');

    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    controller.setCommand(lightOnCommand);
    controller.buttonWasPressed();
    expect(light.on).toHaveBeenCalled();

    controller.setCommand(lightOffCommand);
    controller.buttonWasPressed();
    expect(light.off).toHaveBeenCalled();
  });

  it('should open and close garage door with controller', () => {
    const garageDoor = new GarageDoor();
    jest.spyOn(garageDoor, 'up');
    jest.spyOn(garageDoor, 'down');

    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);

    controller.setCommand(garageDoorUpCommand);
    controller.buttonWasPressed();
    expect(garageDoor.up).toHaveBeenCalled();

    controller.setCommand(garageDoorDownCommand);
    controller.buttonWasPressed();
    expect(garageDoor.down).toHaveBeenCalled();
  });
});
