import { BillingPackage } from "./billingPackage";

export class EmptyPackage implements BillingPackage {
  public monthlyBill(totalHours: number): number {
    return 0;
  }
}
