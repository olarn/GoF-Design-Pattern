import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponState } from "./state/gashaponState";
import { OutofCapsuleState } from "./state/outOfCapsuleState";
import { ReadyState } from "./state/readyState";

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [];
    private needs = 4;
    private coins = 0;
    private state: GashaponState = new OutofCapsuleState(this); 

    // -------------------- State methods

    insertCoin() {
        this.state.insertCoin();
    }

    ejectCoins(): number {
        return this.state.ejectCoins();
    }

    spin(): GashaponCapsule {
        return this.state.spin();
    }

    reload(capsules: GashaponCapsule[]) {
        capsules.forEach(capsule => {
            this.remainCapsule.push(capsule);
        });
        this.setState(new ReadyState(this));
    }

    // -------------------- Gashapon Machine (or Context) methods

    setState(state: GashaponState): void {
        this.state = state;
    }

    setCoin(): void {
        this.coins += 1;
    }

    getCoins(): number {
        return this.coins;
    }

    releaseCoins(): number {
        const coinToReturn = this.coins;
        this.coins = 0;
        return coinToReturn;
    }

    issueCapsule(): GashaponCapsule {
        this.coins = 0;
        const capsule = this.remainCapsule.pop();
        if (capsule) {
            this.remainCapsule.slice(0);
            return capsule
        }
        throw new Error("The machine has some problem. Please eject coins."); 
    }

    getNeeds(): number {
        return this.needs;
    }

    getRemainCapsule(): number {
        return this.remainCapsule.length;
    }
}