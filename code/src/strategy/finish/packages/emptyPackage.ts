import { IPackage } from "./IPackage";

export class EmptyPackage implements IPackage {
  public monthlyBill(totalHours: number): number {
    return 0;
  }
}
