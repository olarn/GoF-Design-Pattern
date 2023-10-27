import { Gashapon } from './gashapon';
import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachineState } from './gashaponMachineState';

describe('[State - begin] Spin Gashapon', () => {
  var gashapon = new Gashapon();

  beforeEach(() => {
    gashapon = new Gashapon();
  });

  it('should throw error to tell you to add more coin if state is `ready` or `hasCoin`', () => {
    // given
    gashapon.reload([new GashaponCapsule('Luffy')]);

    // when -> then
    expect(() => gashapon.spin()).toThrowError('Please insert more coin');
    gashapon.insertCoin();
    expect(() => gashapon.spin()).toThrowError('Please insert more coin');
  });

  it('should throw error if spin while state is `outOfCapsule`', () => {
    expect(() => gashapon.spin()).toThrowError(
      'Cannot spin when out of capsule'
    );
  });

  it('should be able to spin when state is `readyToSpin`', () => {
    gashapon.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Nami'),
    ]);

    // when
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    const nami = gashapon.spin();

    // then
    expect(nami?.getToy()).toBe('Nami');
    expect(gashapon.getState()).toBe(GashaponMachineState.ready);

    // when
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    const luffy = gashapon.spin();

    // then
    expect(luffy?.getToy()).toBe('Luffy');
    expect(gashapon.getState()).toBe(GashaponMachineState.outOfCapsule);
  });
});
