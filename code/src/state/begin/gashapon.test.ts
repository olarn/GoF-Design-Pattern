import { Gashapon } from './gashapon';
import { GashaponCapsule } from './gashaponCapsule';

describe('[State - begin] Gashapon Machine', () => {
  const gashapon = new Gashapon();

  beforeAll(() => {
    gashapon.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Jinbei'),
    ]);
  });

  it('usage in real world', () => {
    expect(() => gashapon.ejectCoins()).toThrow(
      "You haven't insert any coin"
    );

    gashapon.insertCoin();
    expect(gashapon.getCoins()).toBe(1);
    expect(gashapon.ejectCoins()).toBe(1);
    expect(gashapon.getCoins()).toBe(0);

    gashapon.insertCoin();
    expect(() => gashapon.spin()).toThrow('Please insert more coin');
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    expect(gashapon.getCoins()).toBe(4);
    expect(() => gashapon.insertCoin()).toThrow(
      'Cannot insert coin when ready to spin'
    );
    expect(gashapon.ejectCoins()).toBe(4);

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    const capsult = gashapon.spin();
    expect(capsult?.getToy()).toBe('Jinbei');

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.spin();

    expect(gashapon.getState()).toBe('outOfCapsule');
    expect(gashapon.getRemainCapsule()).toBe(0);
    expect(() => gashapon.insertCoin()).toThrow(
      'Cannot insert coin when out of capsule'
    );
    expect(() => gashapon.spin()).toThrow(
      'Cannot spin when out of capsule'
    );
    expect(() => gashapon.ejectCoins()).toThrow(
      "You haven't insert any coin"
    );
  });
});
