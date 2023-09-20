export enum GashaponState {
    ready = 'ready',
    readyToSpin = 'readyToSpin',
    outOfCapsule = 'outOfCapsule',
}

export class GashaponCapsule {
    constructor(private toy: string) {
    }

    getToy(): string {
        return this.toy;
    }
}

export class Gashapon {
    private remainCapsule: GashaponCapsule[] = [
        new GashaponCapsule('Luffy'),
    ];
    private requireCoins = 4;
    private insertedCoins: number = 0;
    private state: GashaponState = GashaponState.ready;

    getState() {
        return this.state;
    }

    getCoins() {
        return this.insertedCoins;
    }

    insertCoin() {
        if (this.state === GashaponState.readyToSpin) {
            return;
        }
        this.insertedCoins++;
        if (this.insertedCoins >= this.requireCoins) {
            this.state = GashaponState.readyToSpin;
        }
    }

    ejectCoins() {
        const coinToReturn = this.insertedCoins;
        this.insertedCoins = 0;
        if (this.remainCapsule.length === 0) {
            this.state = GashaponState.outOfCapsule
        } else {
            this.state = GashaponState.ready;
        }
        return coinToReturn;
    }

    spin() {
        if (this.state !== GashaponState.readyToSpin) {
            throw new Error('Not enough coin');
        }
        this.insertedCoins = 0;
        const capsult = this.remainCapsule[0];
        if (capsult) {
            this.remainCapsule = this.remainCapsule.slice(1);
            if (this.remainCapsule.length === 0) {
                this.state = GashaponState.outOfCapsule
            } else { 
                this.state = GashaponState.ready;
            }
            return capsult;
        }
        throw Error('No more capsule, eject to return coins.');
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