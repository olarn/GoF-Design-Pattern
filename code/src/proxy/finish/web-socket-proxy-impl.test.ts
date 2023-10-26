import WebSocketProxyImpl from './web-socket-proxy-impl';
import WebSocket from 'ws';

jest.mock('ws');
describe('WebSocketProxyImpl', function () {
  it('should throw error WebSocket is not connected when call send with out connection', function () {
    const webSocketProxyImpl = new WebSocketProxyImpl(
      'ws://example.com/socket',
    );
    expect(() => webSocketProxyImpl.send('Hello')).toThrowError(
      'WebSocket is not connected.',
    );
  });
  it('should throw an error when the WebSocket instance fails to connect', () => {
    const url = 'ws://example.com';
    const webSocketProxy = new WebSocketProxyImpl(url);

    jest.spyOn(WebSocket.prototype, 'on').mockImplementation(() => {
      throw new Error('WebSocket connection failed.');
    });

    expect(() => {
      webSocketProxy.connect();
    }).toThrow('WebSocket connection failed.');
  });
});
