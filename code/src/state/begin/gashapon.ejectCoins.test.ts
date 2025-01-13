import { Gashapon } from './gashapon';
import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachineState } from './gashaponMachineState';

describe('[State - begin] Eject coins', () => {
  var gashapon = new Gashapon();

  beforeEach(() => {
    gashapon = new Gashapon();
  });

  it('should be able to eject coins when status is `readyToSpin`', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);

    // when
    gashapon.insertCoin();
    gashapon.insertCoin();
    const returnedCoins = gashapon.ejectCoins();

    // then
    expect(returnedCoins).toBe(2);
    expect(gashapon.getState()).toBe(GashaponMachineState.ready);
  });

  it('should throw error if eject coins when state is `ready`', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);

    // when -> then
    expect(() => gashapon.ejectCoins()).toThrow(
      "You haven't insert any coin"
    );
  });

  it('should throw error if eject coins when state is `outOfCapsule`', () => {
    expect(() => gashapon.ejectCoins()).toThrow(
      "You haven't insert any coin"
    );
  });
});
