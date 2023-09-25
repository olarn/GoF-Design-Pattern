import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponState } from "./gashaponState";

export class HasCoinState implements GashaponState {
    constructor(private gashapon: Gashapon) { }

    insertCoin(): void {
        this.gashapon.setCoin();
        if (this.gashapon.getCoins() < this.gashapon.getRequireCoins()) {
            this.gashapon.setState(GashaponMachineState.hasCoin);
        } else {
            if (this.tenPercentChanceToGetWinnerSpin()) {
                this.gashapon.setState(GashaponMachineState.winnerChanceToSpin);
            } else {
                this.gashapon.setState(GashaponMachineState.readyToSpin);
            }
        }
    }

    ejectCoins(): number {
        this.gashapon.setState(GashaponMachineState.ready);
        return this.gashapon.returnCoins();
    }

    spin(): GashaponCapsule[] {
        throw new Error('Please insert more coin');
    }

    public tenPercentChanceToGetWinnerSpin(): boolean {
        return Math.random() < 0.1;
    }
}