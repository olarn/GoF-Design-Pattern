import { Gashapon } from '../gashapon';
import { GashaponCapsule } from '../gashaponCapsule';
import { GashaponMachineState } from '../gashaponMachineState';
import { HasCoinState } from '../states/hasCoinState';
import { OutOfCapsuleState } from '../states/outOfCapsuleState';
import { ReadyState } from '../states/readyState';
import { ReadyToSpinState } from '../states/readyToSpinState';
import { WinnerChanceToSpin } from '../states/winnerChanceToSpin';

describe('[State - finish] Winner 2 Gashapon capsules', () => {
  it('should activate winnerChance state instede of normal readyToSpin', () => {
    // Given
    const gashapon = new Gashapon();
    const hasCoinState = new HasCoinState(gashapon);
    hasCoinState.tenPercentChanceToGetWinnerSpin = jest
      .fn()
      .mockReturnValue(true);

    const winnerChanceToSpinState = new WinnerChanceToSpin(gashapon);
    winnerChanceToSpinState.winTheChance = jest.fn().mockReturnValue(true);

    gashapon.allStates = {
      [GashaponMachineState.ready]: new ReadyState(gashapon),
      [GashaponMachineState.hasCoin]: hasCoinState,
      [GashaponMachineState.readyToSpin]: new ReadyToSpinState(gashapon),
      [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
      [GashaponMachineState.winnerChanceToSpin]: winnerChanceToSpinState,
    };

    gashapon.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Zoro'),
    ]);

    // when
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    const returnGasha = gashapon.spin();

    // then
    expect(returnGasha.length).toBe(2);
    expect(gashapon.getRemainCapsule()).toBe(0);
  });
});
