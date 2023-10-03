import WebSocket from 'ws';
import LoggingWebSocket from './logging-web-socket';

jest.mock('ws')
describe('LoggingWebSocket', function () {
  it('should return date time in human-readable format', function () {
    const loggingWebSocket = new LoggingWebSocket("ws://example.com/socket");
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2023-10-02'));
    loggingWebSocket.connect();
    loggingWebSocket.send("now");
    expect(WebSocket.prototype.send).toHaveBeenCalledWith("Monday, October 2, 2023 at 07:00:00 AM GMT+7");
  });
});
