import { Observer } from "./observer";

export class SlackObserver implements Observer {
    message: string = '';
    public notify(message: string): void {
        this.message = 'Slacker, ' + message;
    }
}