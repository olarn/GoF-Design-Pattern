import { IPackage } from "./IPackage";

export class HourFlexPackage implements IPackage {
  public monthlyBill(totalHours: number): number {
    return totalHours * 50;
  }
}
