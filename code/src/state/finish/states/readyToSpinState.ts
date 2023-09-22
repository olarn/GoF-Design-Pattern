import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponState } from "./gashaponState";

export class readyToSpinState implements GashaponState {
    constructor(private gashapon: Gashapon) { }
    
    insertCoin(): void {
        throw new Error('Cannot insert coin when ready to spin');
    }
    ejectCoins(): number {
        this.gashapon.setState(GashaponMachineState.ready);
        return this.gashapon.returnCoins();
    }

    spin(): GashaponCapsule[] {
        const capsule = this.gashapon.issueCapsule();
        if (this.gashapon.getRemainCapsule() === 0) {
            this.gashapon.setState(GashaponMachineState.outOfCapsule);
        } else {
            this.gashapon.setState(GashaponMachineState.ready);
        }
        return [capsule];
    }
}