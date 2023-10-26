import { IPackage } from "./IPackage";

export class FixedPackage implements IPackage {
  public monthlyBill(totalHours: number): number {
    return 500;
  }
}
