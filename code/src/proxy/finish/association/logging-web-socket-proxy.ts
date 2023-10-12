import { IWebSocketProxy } from '../IWebSocketProxy';
import WebSocketProxyImpl from './web-socket-proxy-impl';

class LoggingWebSocketProxyAssoc implements IWebSocketProxy {
  private webSocketProxyImpl :IWebSocketProxy|null = null;
  constructor(url:string) {
    this.webSocketProxyImpl = new WebSocketProxyImpl(url);
    this.connect();
  }

  connect() {
    this.webSocketProxyImpl?.connect()
    console.log('WebSocket connected');
  }

  timeNowInString() {
    return `${new Date().toISOString()}`;
  }

  send(data: string): void {
    if (data === "now") {
      data = this.timeNowInString();
    }
    console.log(`Sent: ${data}`);
    this.webSocketProxyImpl?.send(data);
  }


}


export default LoggingWebSocketProxyAssoc;
