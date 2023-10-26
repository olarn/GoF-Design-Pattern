import { Gashapon } from '../../gashapon';
import { GashaponCapsule } from '../../gashaponCapsule';
import { HasCoinState } from '../hasCoinState';

describe('Has coin State', () => {
  it('should get readToSpin state if not get a chance', () => {
    // given
    const gashapon = new Gashapon();
    gashapon.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Jinbei'),
      new GashaponCapsule('Zoro'),
    ]);

    const hasCoinState = new HasCoinState(gashapon);

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    // when

    expect(gashapon.getState()).toBe('hasCoin');

    // hasCoinState.spin();
  });

  it('should get winnerChanceToSpin state if get a chance', () => {});
});
