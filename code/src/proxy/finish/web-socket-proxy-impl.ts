import WebSocket from "ws";
import { IWebSocketProxy } from "proxy/finish/IWebSocketProxy";

export class WebSocketProxyImpl implements IWebSocketProxy {
  private readonly url: string;
  private socket: WebSocket | null;

  constructor(url: string) {
    this.url = url;
    this.socket = null;
  }

  connect() {
    try {
      this.socket = new WebSocket(this.url);
      this.initializeWebSocketCallBack();
    } catch (e) {
      throw e;
    }
  }

  send(data: string) {
    if (!this.socket) {
      throw new Error("WebSocket is not connected.");
    }
    this.socket.send(data);
  }

  initializeWebSocketCallBack() {
    if (this.socket) {
      this.socket.on("open", (code: number, reason: string) => {
        console.log(`WebSocket open with code ${code} and reason: ${reason}`);
      });

      this.socket.on("message", (message: string) => {
        console.log(`Received: ${message}`);
      });

      this.socket.on("close", (code: number, reason: string) => {
        console.log(`WebSocket closed with code ${code} and reason: ${reason}`);
      });
    }
  }
}

export default WebSocketProxyImpl;
