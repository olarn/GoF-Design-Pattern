import { BillingPackage } from "./billingPackage";

export class FixedPackage implements BillingPackage {
  public monthlyBill(totalHours: number): number {
    return 500;
  }
}
