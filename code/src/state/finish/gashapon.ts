import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponState } from "./state/gashaponState";
import { OutofCapsuleState } from "./state/outOfCapsuleState";
import { ReadyState } from "./state/readyState";

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [];
    private needs = 4;
    private coins = 0;
    private state: GashaponState = new OutofCapsuleState(this); 

    // === Perform State methods

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

    // === Gashapon Machine (or Context) methods that will be called by State

    setState(state: GashaponState): void {
        this.state = state;
    }

    getCoins(): number {
        return this.coins;
    }
    
    setCoin(): void {
        this.coins += 1;
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