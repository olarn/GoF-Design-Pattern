import { Observer } from './observers/observer';

export class NotificationCenter {
  private static instance: NotificationCenter;
  private constructor() {}

  public static getInstance(): NotificationCenter {
    if (!NotificationCenter.instance) {
      NotificationCenter.instance = new NotificationCenter();
    }
    return NotificationCenter.instance;
  }
  private observers: Observer[] = [];

  reset() {
    this.observers = [];
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public totalObservers(): number {
    return this.observers.length;
  }

  public postNotification(message: string): void {
    this.observers.forEach((observer) => observer.notify(message));
  }
}
