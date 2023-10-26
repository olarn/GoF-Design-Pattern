import { Observer } from "./observer";

export class SlackObserver implements Observer {
  public notify(message: string): void {
    // call slack API to send message
  }
}
