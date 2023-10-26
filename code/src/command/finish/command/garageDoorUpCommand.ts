import { GarageDoor } from '../devices';
import { Command } from './command';

export class GarageDoorUpCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.up();
  }
}
