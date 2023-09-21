import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Eject coins', () => {
    var gashapon = new Gashapon();

    beforeEach(() => {
        gashapon = new Gashapon();
    });

    it('should be able to eject coins when status is `readyToSpin`', () => {
        // given
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
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when -> then
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");
    });

    it('should throw error if eject coins when state is `outOfCapsule`', () => {
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");
    });
});