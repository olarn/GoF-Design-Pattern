import { Observer } from "./observer";

export class TelegramObserver implements Observer {
    message = '';
    public notify(message: string): void {
        this.message = 'Telegrammer, ' + message;
    }
}