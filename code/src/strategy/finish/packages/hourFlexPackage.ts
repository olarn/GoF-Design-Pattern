import { BillingPackage } from "./billingPackage";

export class HourFlexPackage implements BillingPackage {
  public monthlyBill(totalHours: number): number {
    return totalHours * 50;
  }
}
