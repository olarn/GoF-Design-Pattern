import { WebSocketProxyImpl } from './web-socket-proxy-impl';

class LoggingWebSocketProxy extends WebSocketProxyImpl {
  constructor(url: string) {
    super(url);
    this.connect();
  }

  connect() {
    super.connect();
    console.log('WebSocket connected');
  }

  sendLogging(data: string) {
    if (data === "now") {
      data = this.timeNowInString();
    }
    super.send(data);
    console.log(`Sent: ${data}`);
  }

  timeNowInString() {
    return `${new Date().toISOString()}`;
  }
}


export default LoggingWebSocketProxy;
