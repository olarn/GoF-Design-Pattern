import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponState } from "./gashaponState";
import { HasCoinState } from "./hasCoinState";
import { ReadyToSpinState } from "./readyToSpinState";

export class ReadyState implements GashaponState {
    constructor(private gashapon: Gashapon) {}

    insertCoin(): void {
        this.gashapon.setCoin();
        if (this.gashapon.getCoins() < this.gashapon.getNeeds()) {
            this.gashapon.setState(new HasCoinState(this.gashapon));
        } else {
            this.gashapon.setState(new ReadyToSpinState(this.gashapon));
        }
    }
    ejectCoins(): number {
        throw new Error("You haven't insert any coin");
    }

    spin(): GashaponCapsule {
        throw new Error('Please insert more coin');
    }
}