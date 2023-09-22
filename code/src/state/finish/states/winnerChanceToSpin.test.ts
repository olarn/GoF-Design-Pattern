import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { WinnerChanceToSpin } from "./winnerChanceToSpin";

describe('Gashapon Winner Chance to Spin State', () => {
    var gashapon: Gashapon;
    var state: WinnerChanceToSpin;

    beforeEach(() => {
        gashapon = new Gashapon();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Jinbei'),
            new GashaponCapsule('Zoro'),
        ]);
        gashapon.setState(GashaponMachineState.winnerChanceToSpin);
        state = new WinnerChanceToSpin(gashapon);
    });
        
    it('should issue 1 capsule', () => {
        // given 
        state.winTheChance = jest.fn().mockReturnValue(false);
        // when
        const capsule = state.spin();
        // then
        expect(capsule.length).toBe(1);
    });

    it('should issue 2 capsule', () => {
        // given 
        state.winTheChance = jest.fn().mockReturnValue(true);
        // when
        const capsule = state.spin();
        // then
        expect(capsule.length).toBe(2);
    });
});