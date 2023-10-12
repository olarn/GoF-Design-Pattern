export interface IWebSocketProxy {
  connect(): void;

  send(data: string): void;
}
