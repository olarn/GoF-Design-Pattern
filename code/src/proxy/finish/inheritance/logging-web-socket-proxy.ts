import WebSocketProxyImpl from '../web-socket-proxy-impl';

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
      const date = new Date();
      const formattedDate: string = this.transformTimeToReadableFormat(date);
      data = `${formattedDate}`;
    }

    super.send(data);
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


export default LoggingWebSocketProxy;
