import { Observer } from "./observer";

export class DiscordObserver implements Observer {
    message: string = '';
    public notify(message: string): void {
        this.message = 'Discordian, ' + message;
    }
}