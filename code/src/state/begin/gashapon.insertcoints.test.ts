import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Insert coins', () => {

    it('should be has the same number of coins after insert coins', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();

        // then
        expect(gashapon.getCoins()).toBe(4);
    });

    it('should not be able to insert coin when status is `readyToSpin`', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();

        // when -> then
        expect(() => gashapon.insertCoin()).toThrowError('Cannot insert coin when ready to spin');
    });

    it('state should be `readyToSpin` after insert enough coins', () => {
        // given
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);

        // when
        gashapon.insertCoin();
        expect(gashapon.getState()).toBe(GashaponState.hasCoin);
        
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();

        // then
        expect(gashapon.getState()).toBe(GashaponState.readyToSpin);
    });

    it('should throw error if insert coin and current state is `outOfStock`', () => {
        const gashapon = new Gashapon();
        expect(() => gashapon.insertCoin()).toThrowError('Cannot insert coin when out of capsule');
    });
});