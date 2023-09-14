import { Light } from "../devices";
import { Command } from "./command";

export class LightOnCommand implements Command {
    light: Light;
    
    constructor(light: Light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
}