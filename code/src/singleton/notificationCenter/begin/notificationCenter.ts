import { Observer } from "./observers/observer";

export class NotificationCenter {
    private observers: Observer[] = [];
    
    reset() {
        this.observers = [];
     }
  
    public addObserver(observer: Observer): void {
        if (this.observers.length >= 2) {
            return;
        }
        this.observers.push(observer);
    }

    public postNotification(message: string): void {
        this.observers.forEach(observer =>
            observer.notify(message)
        );
    }
}