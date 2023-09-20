import { Gashapon, GashaponCapsule, GashaponState } from "./gashapon";

describe('Init Gashapon', () => {

    it('should be has toys when init GashaponCapsule', () => {
        const capsule = new GashaponCapsule('Luffy');
        expect(capsule.getToy()).toBe('Luffy');
    });

    it('should be out of capsule when init', () => {
        const gashapon = new Gashapon();
        expect(gashapon.getState()).toBe(GashaponState.outOfCapsule);
        expect(gashapon.getRemainCapsule()).toBe(0);
    });

    it('should be ready when reload with capsule', () => {
        const gashapon = new Gashapon();
        gashapon.reload([new GashaponCapsule('Luffy')]);
        expect(gashapon.getState()).toBe(GashaponState.ready);
    });
});
    
