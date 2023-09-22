import { GashaponCapsule } from "../gashaponCapsule";

export interface GashaponState {
    insertCoin(): void;
    ejectCoins(): number;
    spin(): GashaponCapsule[];
}

export interface GashaponDictionary {
    [key: string]: GashaponState;
}