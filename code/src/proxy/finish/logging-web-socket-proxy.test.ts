import LoggingWebSocketProxy from "./logging-web-socket-proxy";
import WebSocket from "ws";
import WebSocketProxyImpl from './web-socket-proxy-impl';

jest.mock('ws');
describe('LoggingWebSocketProxy', function () {
  it('should have call websocket send with params hello.', function () {
    const loggingWebSocketProxy = new LoggingWebSocketProxy("ws://example.com/socket");

    loggingWebSocketProxy.sendLogging("Hello");

    expect(WebSocket.prototype.send).toHaveBeenCalledWith("Hello");
  })

  it('should throw error when there is no connection', function () {
    WebSocketProxyImpl.prototype.connect = jest.fn().mockReturnValue(new Error('Async error'));
    jest.spyOn(console, 'error')

    const loggingWebSocketProxy = new LoggingWebSocketProxy("ws://example.com/socket");

    loggingWebSocketProxy.sendLogging("Hello");

    expect(console.error).toHaveBeenCalledWith("WebSocket is not connected.");
  })
});
