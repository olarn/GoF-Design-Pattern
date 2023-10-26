import { Gashapon } from "../../gashapon";
import { GashaponCapsule } from "../../gashaponCapsule";
import { GashaponMachineState } from "../../gashaponMachineState";
import { HasCoinState } from "../hasCoinState";
import { OutOfCapsuleState } from "../outOfCapsuleState";
import { ReadyState } from "../readyState";
import { ReadyToSpinState } from "../readyToSpinState";
import { WinnerChanceToSpin } from "../winnerChanceToSpin";

describe("Gashapon + state Winner Chance to Spin ", () => {
  var gashapon: Gashapon;

  beforeEach(() => {
    gashapon = new Gashapon();
    gashapon.reload([
      new GashaponCapsule("Luffy"),
      new GashaponCapsule("Jinbei"),
      new GashaponCapsule("Zoro"),
    ]);
  });

  it("should lose 10% chance to get winner chance", () => {
    var hasCointState = new HasCoinState(gashapon);
    hasCointState.tenPercentChanceToGetWinnerSpin = jest
      .fn()
      .mockReturnValue(false);
    gashapon.allStates = {
      [GashaponMachineState.ready]: new ReadyState(gashapon),
      [GashaponMachineState.hasCoin]: hasCointState,
      [GashaponMachineState.readyToSpin]: new ReadyToSpinState(gashapon),
      [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
      [GashaponMachineState.winnerChanceToSpin]: new ReadyToSpinState(gashapon),
    };
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    expect(gashapon.getState()).toBe(GashaponMachineState.readyToSpin);
  });

  it("should win 10% chance to get winner chance", () => {
    const mockHasCointState = new HasCoinState(gashapon);
    mockHasCointState.tenPercentChanceToGetWinnerSpin = jest
      .fn()
      .mockReturnValue(true);

    const mockWinnerChanceToSpin = new WinnerChanceToSpin(gashapon);
    mockWinnerChanceToSpin.winTheChance = jest.fn().mockReturnValue(true);

    gashapon.allStates = {
      [GashaponMachineState.ready]: new ReadyState(gashapon),
      [GashaponMachineState.hasCoin]: mockHasCointState,
      [GashaponMachineState.readyToSpin]: new ReadyToSpinState(gashapon),
      [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
      [GashaponMachineState.winnerChanceToSpin]: mockWinnerChanceToSpin,
    };
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    expect(gashapon.ejectCoins()).toBe(4);

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();

    expect(gashapon.getState()).toBe(GashaponMachineState.winnerChanceToSpin);
    expect(() => gashapon.insertCoin()).toThrowError(
      "Cannot insert coin when ready to spin",
    );

    const capsules = gashapon.spin();
    expect(capsules.length).toBe(2);
  });

  it("should random 10% chance to get winner chance, 50% to win", () => {
    const mockHasCointState = new HasCoinState(gashapon);
    mockHasCointState.tenPercentChanceToGetWinnerSpin = jest
      .fn()
      .mockReturnValue(true);

    gashapon.allStates = {
      [GashaponMachineState.ready]: new ReadyState(gashapon),
      [GashaponMachineState.hasCoin]: mockHasCointState,
      [GashaponMachineState.readyToSpin]: new ReadyToSpinState(gashapon),
      [GashaponMachineState.outOfCapsule]: new OutOfCapsuleState(),
      [GashaponMachineState.winnerChanceToSpin]: new WinnerChanceToSpin(
        gashapon,
      ),
    };

    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    gashapon.insertCoin();
    expect(gashapon.spin()).not.toEqual([]);
  });
});
