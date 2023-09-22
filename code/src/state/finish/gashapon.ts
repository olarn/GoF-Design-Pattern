import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";
import { GashaponDictionary } from "./states/gashaponState";
import { hasCoinState } from "./states/hasCoinState";
import { outOfCapsuleState } from "./states/outOfCapsuleState";
import { readyState } from "./states/readyState";
import { readyToSpinState } from "./states/readyToSpinState";

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [];
    private requireCoins = 4;
    private coins = 0;
    private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
    private states: GashaponDictionary = {
        [GashaponMachineState.ready]: new readyState(this),
        [GashaponMachineState.hasCoin]: new hasCoinState(this),
        [GashaponMachineState.readyToSpin]: new readyToSpinState(this),
        [GashaponMachineState.outOfCapsule]: new outOfCapsuleState(),
    };

    // -------------------- State methods

    insertCoin() {
        this.states[this.state].insertCoin();
    }

    ejectCoins(): number {
        return this.states[this.state].ejectCoins();
    }

    spin(): GashaponCapsule {
        return this.states[this.state].spin();
    }

    reload(capsules: GashaponCapsule[]) {
        capsules.forEach(capsule => {
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
        if (this.remainCapsule.length == 0) {
            this.state = GashaponMachineState.outOfCapsule;
        } else {
            this.state = GashaponMachineState.ready;
        }

        // reset coins only machine issue capsule, 
        // so that user can eject coin if any issue happends.
        this.coins = 0;

        return capsule
}

    // -------------------- Gashapon Machine (or Context) methods

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