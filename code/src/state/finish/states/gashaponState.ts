import { Gashapon } from "../gashapon";
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";

export interface GashaponState {
    insertCoin(): void;
    ejectCoins(): number;
    spin(): GashaponCapsule;
}

export interface GashaponDictionary {
    [key: string]: GashaponState;
}