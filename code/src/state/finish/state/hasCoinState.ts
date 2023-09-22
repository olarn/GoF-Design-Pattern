import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponState } from "./gashaponState";
import { ReadyState } from "./readyState";
import { ReadyToSpinState } from "./readyToSpinState";

export class HasCoinState implements GashaponState {
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
        const coinToReturn = this.gashapon.getCoins();
        this.gashapon.releaseCoins();
        this.gashapon.setState(new ReadyState(this.gashapon));
        return coinToReturn;    
    }

    spin(): GashaponCapsule {
        throw new Error('Please insert more coin');
    }
}