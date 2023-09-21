import { Gashapon } from "./gashapon";
import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";

describe('Init Gashapon', () => {
    var gashapon = new Gashapon();

    beforeEach(() => {
        gashapon = new Gashapon();
    });

    it('should be has toys when init GashaponCapsule', () => {
        const capsule = new GashaponCapsule('Luffy');
        expect(capsule.getToy()).toBe('Luffy');
    });

    it('should be out of capsule when init', () => {
        expect(gashapon.getState()).toBe(GashaponMachineState.outOfCapsule);
        expect(gashapon.getRemainCapsule()).toBe(0);
    });

    it('should be ready when reload with capsule', () => {
        gashapon.reload([new GashaponCapsule('Luffy')]);
        expect(gashapon.getState()).toBe(GashaponMachineState.ready);
    });
});
    
