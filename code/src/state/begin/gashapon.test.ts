import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Gashapon', () => {
    it('state should be `connotSpin` at initial state', () => {
        // given
        const gashapon = new Gashapon();

        // then
        expect(gashapon.getState()).toBe(GashaponState.ready);
    });

    it('should be able to insert coins, 4 coin max', () => {
        // given
        const gashapon = new Gashapon();
        expect(gashapon.getCoins()).toBe(0);

        // when
        gashapon.insertCoin();

        // then
        expect(gashapon.getCoins()).toBe(1);
        expect(gashapon.getState()).toBe(GashaponState.ready);

        // when
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();

        // then
        expect(gashapon.getCoins()).toBe(4);
        expect(gashapon.getState()).toBe(GashaponState.readyToSpin);
    });

    it('should not be able to insert coin when state is `readyToSpin`', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }

        // when
        gashapon.insertCoin();

        // then
        expect(gashapon.getCoins()).toBe(4);
        expect(gashapon.getState()).toBe(GashaponState.readyToSpin);
    });

    it('should throw error if try to spin when state is not `readyToSpin`', () => {
        // given
        const gashapon = new Gashapon();

        // then
        expect(() => {
            gashapon.spin();
        }).toThrowError('Not enough coin');
    });

    it('should be able to eject coins', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 3; i++) {
            gashapon.insertCoin();
        }

        // when
        const returnedCoin = gashapon.ejectCoins();

        //  then
        expect(gashapon.getCoins()).toBe(0);
        expect(returnedCoin).toBe(3);
        expect(gashapon.getState()).toBe(GashaponState.ready);
    });

    it('should be able to spin when state is `outOfCapsule`, then user get gashapon capsule', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }

        // when
        const capsule = gashapon.spin();

        // then
        expect(capsule.getToy()).toBe('Luffy');
        expect(gashapon.getCoins()).toBe(0);
        expect(gashapon.getState()).toBe(GashaponState.outOfCapsule);

        gashapon.reload([
            new GashaponCapsule('Chopper'),
            new GashaponCapsule('Zoro'),
        ]);

        expect(gashapon.getState()).toBe(GashaponState.ready);
    });

    it('should remains capsult after spin', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }
        expect(gashapon.getRemainCapsule()).toBe(1);

        // when
        gashapon.spin();

        // then
        expect(gashapon.getRemainCapsule()).toBe(0);
    });

    it('should throw error when spin ', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }
        gashapon.spin();

        // when
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }
        
        // then
        expect(() => {
            gashapon.spin();
        }).toThrowError('No more capsule, eject to return coins.');
    });

    it('should be able to eject coins after gashapon is empty', () => {
        // given
        const gashapon = new Gashapon();
        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }
        gashapon.spin();

        for (let i = 0; i < 4; i++) {
            gashapon.insertCoin();
        }
        // when
        const returnedCoin = gashapon.ejectCoins();

        // then
        expect(returnedCoin).toBe(4);
        expect(gashapon.getCoins()).toBe(0);
        expect(gashapon.getState()).toBe(GashaponState.outOfCapsule);
    });

    it('should be able to reload capsule into Gashapon machine', () => {
        const gashapon = new Gashapon();
        gashapon.reload([
            new GashaponCapsule('Chopper'),
            new GashaponCapsule('Zoro'),
            new GashaponCapsule('Nami'),
        ]);
        expect(gashapon.getRemainCapsule()).toBe(4);
    });
});