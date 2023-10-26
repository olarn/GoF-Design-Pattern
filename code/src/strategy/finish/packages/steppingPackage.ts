import { BillingPackage } from './billingPackage';

export class SteppingPackage implements BillingPackage {
  public monthlyBill(totalHours: number): number {
    if (totalHours <= 50) {
      return totalHours;
    }
    return 50 + (totalHours - 50) * 0.5;
  }
}
