import { Observer } from './observer';

export class DiscordObserver implements Observer {
  public notify(message: string): void {
    // call discord API to send message
  }
}
