import { GarageDoor } from "../begin/devices";
import { GarageDoorUpCommand } from "./command/garageDoorUpCommand";
import { LightOnCommand } from "./command/lightOnCommand";
import { Controller } from "./controller";
import { Light } from "./devices";

describe('Controller', () => {
    it('should ececute device taht wrapped with command object', () => {
        const controller = new Controller();

        // light on
        const light = new Light();
        const lightSpy = jest.spyOn(light, 'on');
        const lightOnCommand = new LightOnCommand(light);

        controller.setCommand(lightOnCommand);
        controller.buttonWasPressed();
        expect(lightSpy).toBeCalled();

        // garageDoor up
        const garageDoor = new GarageDoor();
        const garageDoorSpy = jest.spyOn(garageDoor, 'up');
        const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);

        controller.setCommand(garageDoorUpCommand);
        controller.buttonWasPressed();
        expect(garageDoorSpy).toBeCalled();
    });
});