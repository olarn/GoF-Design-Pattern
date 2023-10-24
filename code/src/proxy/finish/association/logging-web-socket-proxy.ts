import { IWebSocketProxy } from '../IWebSocketProxy';
import WebSocketProxyImpl from '../web-socket-proxy-impl';

class LoggingWebSocketProxyAssoc implements IWebSocketProxy {
  private webSocketProxyImpl: IWebSocketProxy | null = null;

  constructor(url: string) {
    this.webSocketProxyImpl = new WebSocketProxyImpl(url);
    this.connect();
  }

  connect() {
    this.webSocketProxyImpl?.connect()
    console.log('WebSocket connected');
  }

  send(data: string): void {
    if (data === "now") {
      data = this.transformTimeToReadableFormat(new Date());
    }
    this.webSocketProxyImpl?.send(data);
  }

  transformTimeToReadableFormat(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
  }

}


export default LoggingWebSocketProxyAssoc;
