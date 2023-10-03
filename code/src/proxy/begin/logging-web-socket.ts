import WebSocket from 'ws';

class LoggingWebSocket {
  private readonly url: string;
  private socket: WebSocket | null;

  constructor(url: string) {
    this.url = url;
    this.socket = null;
  }

  connect() {
    try {
      this.socket = new WebSocket(this.url);
    } catch (e) {
      console.error(e)
    }
  }

  send(data: string) {
    if (this.socket) {
      if (data === "now") {
        const date = new Date();

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

        data = `${formattedDate}`;
      }
      this.socket.send(data);
    } else {
      console.error("WebSocket is not connected.");
    }
  }
}

export default LoggingWebSocket;
