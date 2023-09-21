import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponState } from "./gashaponState";
import { OutofCapsuleState } from "./outOfCapsuleState";
import { ReadyState } from "./readyState";

export class ReadyToSpinState implements GashaponState {
    constructor(private gashapon: Gashapon) {}

    insertCoin(): void {
        throw new Error('Cannot insert coin when ready to spin');
    }
    ejectCoins(): number {
        const coinToReturn = this.gashapon.releaseCoins();
        this.gashapon.setState(new ReadyState(this.gashapon));
        return coinToReturn;    
    }
    spin(): GashaponCapsule {
        if (this.gashapon.getRemainCapsule() == 0) {
            this.gashapon.setState(new OutofCapsuleState(this.gashapon));
        } else {
            this.gashapon.setState(new ReadyState(this.gashapon));
        }
        return this.gashapon.issueCapsule();
    }
}