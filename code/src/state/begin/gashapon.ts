export enum GashaponState {
    ready = 'ready',
    hasCoin = 'hasCoin',
    readyToSpin = 'readyToSpin',
    outOfCapsule = 'outOfCapsule',
}

export class GashaponCapsule {
    constructor(private toy: string) {}
    getToy(): string {
        return this.toy;
    }
}

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [];
    private needs = 4;
    private coins = 0;
    private state: GashaponState = GashaponState.outOfCapsule;

    insertCoin() {
        if (this.state === GashaponState.readyToSpin) {
            throw new Error('Cannot insert coin when ready to spin');
        }
        if (this.state === GashaponState.outOfCapsule) {
            throw new Error('Cannot insert coin when out of capsule');
        }
        if (this.state == GashaponState.ready || this.state == GashaponState.hasCoin) {
            this.coins += 1;
            if (this.coins < this.needs) { 
                this.state = GashaponState.hasCoin;
            }
            if (this.coins == this.needs) {
                this.state = GashaponState.readyToSpin;
            }
        }
    }

    ejectCoins(): number {
        if (this.state === GashaponState.hasCoin || this.state === GashaponState.readyToSpin) {
            const coinToReturn = this.coins;
            this.coins = 0;
            this.state = GashaponState.ready;
            return coinToReturn;    
        }
        if (this.state === GashaponState.ready) {
            throw new Error("You haven't insert any coin");
        }
        if (this.state === GashaponState.outOfCapsule) {
            throw new Error("You haven't insert any coin");
        }
        return 0;
    }

    spin(): GashaponCapsule {
        if (this.state === GashaponState.ready || this.state === GashaponState.hasCoin) {
            throw new Error('Please insert more coin');
        }
        if (this.state === GashaponState.outOfCapsule) {
            throw new Error('Cannot spin when out of capsule');
        }

        this.coins = 0;
        const capsule = this.remainCapsule.pop();
        if (capsule) {
            this.remainCapsule.slice(0);
            if (this.remainCapsule.length == 0) {
                this.state = GashaponState.outOfCapsule;
            } else {
                this.state = GashaponState.ready;
            }
            return capsule
        }
        
        throw new Error("The machine has some problem. Please eject coins."); 
    }

    getState(): GashaponState {
        return this.state;
    }

    getCoins(): number {
        return this.coins;
    }

    reload(capsules: GashaponCapsule[]) {
        capsules.forEach(capsule => {
            this.remainCapsule.push(capsule);
        });
        this.state = GashaponState.ready;
    }

    getRemainCapsule(): number {
        return this.remainCapsule.length;
    }
}