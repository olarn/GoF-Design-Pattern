import { Observer } from "./observer";

export class TelegramObserver implements Observer {
    public notify(message: string): void {
        // call telegram API to send message
    }
}