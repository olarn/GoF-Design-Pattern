import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Spin Gashapon', () => {

    it('should throw error to tell you to add more coin if state is `ready` or `hasCoin`', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when -> then
        expect(() => gashapon.spin()).toThrowError("Please insert more coin");
        gashapon.insertCoin();
        expect(() => gashapon.spin()).toThrowError("Please insert more coin");
    });

    it('should throw error if spin while state is `outOfCapsule`', () => {
        // given
        const gashapon = new Gashapon();

        // when -> then
        expect(() => gashapon.spin()).toThrowError("Please insert more coin");
    });

    it('should be able to spin when state is `readyToSpin`', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Nami'),
        ]);

        // when
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        const nami = gashapon.spin();

        // then
        expect(nami?.getToy()).toBe('Nami');
        expect(gashapon.getState()).toBe(GashaponState.ready);

        // when
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        const luffy = gashapon.spin();

        // then
        expect(luffy?.getToy()).toBe('Luffy');
        expect(gashapon.getState()).toBe(GashaponState.outOfCapsule);

    });
});