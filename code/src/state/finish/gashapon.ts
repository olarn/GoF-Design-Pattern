import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachineState } from './gashaponMachineState';
import { GashaponDictionary } from './states/gashaponState';
import { HasCoinState } from './states/hasCoinState';
import { OutOfCapsuleState } from './states/outOfCapsuleState';
import { ReadyState } from './states/readyState';
import { ReadyToSpinState } from './states/readyToSpinState';

export class Gashapon {
  private remainCapsule: GashaponCapsule[] = [];
  private requireCoins = 4;
  private coins = 0;
  private state: GashaponMachineState = GashaponMachineState.outOfCapsule;

  allStates: GashaponDictionary = {
    [GashaponMachineState.ready]: new ReadyState(this),
    [GashaponMachineState.hasCoin]: new HasCoinState(this),
    [GashaponMachineState.readyToSpin]: new ReadyToSpinState(this),
    [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
    [GashaponMachineState.winnerChanceToSpin]: new ReadyToSpinState(this),
  };

  // === State methods

  insertCoin() {
    this.allStates[this.state].insertCoin();
  }

  ejectCoins(): number {
    return this.allStates[this.state].ejectCoins();
  }

  spin(): GashaponCapsule[] {
    return this.allStates[this.state].spin();
  }

  reload(capsules: GashaponCapsule[]) {
    capsules.forEach((capsule) => {
      this.remainCapsule.push(capsule);
    });
    this.state = GashaponMachineState.ready;
  }

  issueCapsule(): GashaponCapsule {
    const capsule = this.remainCapsule.pop();
    if (!capsule) {
      throw new Error('Out of capsule');
    }

    this.remainCapsule.slice(0);
    this.coins = 0;
    return capsule;
  }

  // === Gashapon Machine (or Context) methods

  getState(): GashaponMachineState {
    return this.state;
  }

  setState(state: GashaponMachineState) {
    this.state = state;
  }

  setCoin() {
    this.coins += 1;
  }

  getCoins(): number {
    return this.coins;
  }

  returnCoins(): number {
    const coins = this.coins;
    this.coins = 0;
    return coins;
  }

  getRequireCoins(): number {
    return this.requireCoins;
  }

  getRemainCapsule(): number {
    return this.remainCapsule.length;
  }
}
