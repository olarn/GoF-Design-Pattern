import { Gashapon } from './gashapon';
import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachineState } from './gashaponMachineState';

describe('Insert coins', () => {
  var gashapon = new Gashapon();

  beforeEach(() => {
    gashapon = new Gashapon();
  });

  it('should be has the same number of coins after insert coins', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);

    // when
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    // then
    expect(gashapon.getCoins()).toBe(4);
  });

  it('should not be able to insert coin when status is `readyToSpin`', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    // when -> then
    expect(() => gashapon.insertCoin()).toThrowError(
      'Cannot insert coin when ready to spin',
    );
  });

  it('state should be `readyToSpin` after insert enough coins', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);

    // when
    gashapon.insertCoin();
    expect(gashapon.getState()).toBe(GashaponMachineState.hasCoin);

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    // then
    expect(gashapon.getState()).toBe(GashaponMachineState.readyToSpin);
  });

  it('should throw error if insert coin and current state is `outOfStock`', () => {
    expect(() => gashapon.insertCoin()).toThrowError(
      'Cannot insert coin when out of capsule',
    );
  });
});
