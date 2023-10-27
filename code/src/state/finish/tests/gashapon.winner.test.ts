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
    const winnerChanceToSpinState = new WinnerChanceToSpin(gashapon);
    gashapon.allStates = {
      [GashaponMachineState.ready]: new ReadyState(gashapon),
      [GashaponMachineState.hasCoin]: new HasCoinState(gashapon),
      [GashaponMachineState.readyToSpin]: new ReadyToSpinState(gashapon),
      [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
      [GashaponMachineState.winnerChanceToSpin]: winnerChanceToSpinState,
    };

    gashapon.reload([
      new GashaponCapsule('Luffy'),
      new GashaponCapsule('Zoro'),
    ]);
  });
});
