import { Command } from "./command/command";

export class Controller {
    slot?: Command;

    public setCommand(command: Command) {
        this.slot = command;
    }

    public buttonWasPressed() {
        this.slot?.execute();
    }
}