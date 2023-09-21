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
        gashapon.insertCoin();
        expect(gashapon.getCoins()).toBe(1);
        expect(gashapon.ejectCoins()).toBe(1);
        expect(gashapon.getCoins()).toBe(0);

        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getCoins()).toBe(4);
    
        const capsult = gashapon.spin();
        expect(capsult?.getToy()).toBe('Jinbei');
    
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.spin();

        expect(gashapon.getState()).toBe('outOfCapsule');
        expect(() => gashapon.insertCoin()).toThrowError('Cannot insert coin when out of capsule');
        expect(() => gashapon.spin()).toThrowError('Cannot spin when out of capsule');
    });
});