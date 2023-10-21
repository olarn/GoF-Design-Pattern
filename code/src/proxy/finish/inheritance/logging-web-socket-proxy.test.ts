import LoggingWebSocketProxy from "./logging-web-socket-proxy";
import WebSocket from "ws";

jest.mock('ws');
describe('LoggingWebSocketProxy', function () {
  it('should have call websocket send with params hello.', function () {
    const loggingWebSocketProxy = new LoggingWebSocketProxy("ws://example.com/socket");

    loggingWebSocketProxy.sendLogging("Hello");

    expect(WebSocket.prototype.send).toHaveBeenCalledWith("Hello");
  })

  it('should have call websocket send with humanreadable date..', function () {
    const loggingWebSocketProxy = new LoggingWebSocketProxy("ws://example.com/socket");
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2023-10-02'));
    loggingWebSocketProxy.connect();
    loggingWebSocketProxy.sendLogging("now");
    expect(WebSocket.prototype.send).toHaveBeenCalledWith("Monday, October 2, 2023 at 07:00:00 AM GMT+7");
  })
});
