import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Eject coins', () => {
    it('should be able to eject coins when status is `readyToSpin`', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when
        gashapon.insertCoin();
        gashapon.insertCoin();
        const returnedCoins = gashapon.ejectCoins();

        // then
        expect(returnedCoins).toBe(2);
        expect(gashapon.getState()).toBe(GashaponState.ready);
    });

    it('should throw error if eject coins when state is `ready`', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when -> then
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");
    });

    it('should throw error if eject coins when state is `outOfCapsule`', () => {
        // given
        const gashapon = new Gashapon();

        // when -> then
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");
    });
});