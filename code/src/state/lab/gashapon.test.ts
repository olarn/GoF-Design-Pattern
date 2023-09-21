import { Gashapon, GashaponCapsule } from "./gashapon";

describe('Gashapon Machine', () => {
    const gashapon = new Gashapon();

    beforeAll(() => {
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Jinbei'),
        ]);
    });

    it('usage in real world', () => {
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");

        gashapon.insertCoin();
        expect(gashapon.getCoins()).toBe(1);
        expect(gashapon.ejectCoins()).toBe(1);
        expect(gashapon.getCoins()).toBe(0);

        gashapon.insertCoin();
        expect(() => gashapon.spin()).toThrowError("Please insert more coin");
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getCoins()).toBe(4);
        expect(() => gashapon.insertCoin()).toThrowError('Cannot insert coin when ready to spin');
        expect(gashapon.ejectCoins()).toBe(4);

        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        const capsult = gashapon.spin();
        expect(capsult?.getToy()).toBe('Jinbei');
    
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.spin();

        expect(gashapon.getState()).toBe('outOfCapsule');
        expect(gashapon.getRemainCapsule()).toBe(0);
        expect(() => gashapon.insertCoin()).toThrowError('Cannot insert coin when out of capsule');
        expect(() => gashapon.spin()).toThrowError('Cannot spin when out of capsule');
        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coin");
    });
});