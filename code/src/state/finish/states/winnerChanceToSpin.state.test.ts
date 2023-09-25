import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { HasCoinState } from "./hasCoinState";
import { OutOfCapsuleState } from "./outOfCapsuleState";
import { ReadyState } from "./readyState";
import { ReadyToSpinState } from "./readyToSpinState";
import { WinnerChanceToSpin } from "./winnerChanceToSpin";

describe('Gashapon Winner Chance to Spin State', () => {
    var gashapon: Gashapon;

    beforeEach(() => {
        gashapon = new Gashapon();
        gashapon.reload([
            new GashaponCapsule('Luffy'),
            new GashaponCapsule('Jinbei'),
            new GashaponCapsule('Zoro'),
        ]);
    });
        
    it('should issue 1 capsule', () => {
        // given 
        var state: WinnerChanceToSpin;
        gashapon.setState(GashaponMachineState.winnerChanceToSpin);
        state = new WinnerChanceToSpin(gashapon);
        state.winTheChance = jest.fn().mockReturnValue(false);
        // when
        const capsule = state.spin();
        // then
        expect(capsule.length).toBe(1);
    });

    it('should issue 2 capsule', () => {
        // given 
        var state: WinnerChanceToSpin;
        gashapon.setState(GashaponMachineState.winnerChanceToSpin);
        state = new WinnerChanceToSpin(gashapon);
        state.winTheChance = jest.fn().mockReturnValue(true);
        // when
        const capsule = state.spin();
        // then
        expect(capsule.length).toBe(2);
    });
});