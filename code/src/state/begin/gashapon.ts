import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [];
    private needs = 4;
    private coins = 0;
    private state: GashaponMachineState = GashaponMachineState.outOfCapsule;

    // -------------------- State methods

    insertCoin() {
        if (this.state === GashaponMachineState.readyToSpin) {
            throw new Error('Cannot insert coin when ready to spin');
        }
        if (this.state === GashaponMachineState.outOfCapsule) {
            throw new Error('Cannot insert coin when out of capsule');
        }
        if (this.state == GashaponMachineState.ready || this.state == GashaponMachineState.hasCoin) {
            this.coins += 1;
            if (this.coins < this.needs) { 
                this.state = GashaponMachineState.hasCoin;
            }
            if (this.coins == this.needs) {
                this.state = GashaponMachineState.readyToSpin;
            }
        }
    }

    ejectCoins(): number {
        if (this.state === GashaponMachineState.ready) {
            throw new Error("You haven't insert any coin");
        }
        if (this.state === GashaponMachineState.outOfCapsule) {
            throw new Error("You haven't insert any coin");
        }
        if (this.state === GashaponMachineState.hasCoin || this.state === GashaponMachineState.readyToSpin) {
            const coinToReturn = this.coins;
            this.coins = 0;
            this.state = GashaponMachineState.ready;
            return coinToReturn;    
        }
        return 0;
    }

    spin(): GashaponCapsule {
        if (this.state === GashaponMachineState.ready || this.state === GashaponMachineState.hasCoin) {
            throw new Error('Please insert more coin');
        }
        if (this.state === GashaponMachineState.outOfCapsule) {
            throw new Error('Cannot spin when out of capsule');
        }

        this.coins = 0;
        const capsule = this.remainCapsule.pop();
        if (capsule) {
            this.remainCapsule.slice(0);
            if (this.remainCapsule.length == 0) {
                this.state = GashaponMachineState.outOfCapsule;
            } else {
                this.state = GashaponMachineState.ready;
            }
            return capsule
        }
        
        throw new Error("The machine has some problem. Please eject coins."); 
    }

    reload(capsules: GashaponCapsule[]) {
        capsules.forEach(capsule => {
            this.remainCapsule.push(capsule);
        });
        this.state = GashaponMachineState.ready;
    }

    // -------------------- Gashapon Machine (or Context) methods

    getState(): GashaponMachineState {
        return this.state;
    }

    getCoins(): number {
        return this.coins;
    }

    getRemainCapsule(): number {
        return this.remainCapsule.length;
    }
}