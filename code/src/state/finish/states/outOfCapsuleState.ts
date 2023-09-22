import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponState } from "./gashaponState";

export class outOfCapsuleState implements GashaponState {
    insertCoin(): void {
        throw new Error('Cannot insert coin when out of capsule');
    }
    ejectCoins(): number {
        throw new Error("You haven't insert any coin");
    }
    spin(): GashaponCapsule {
        throw new Error('Cannot spin when out of capsule');
    }
}