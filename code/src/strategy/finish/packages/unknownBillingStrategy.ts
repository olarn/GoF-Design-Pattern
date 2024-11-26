import { BillingPackage } from './billingPackage';

export class UnknownBillingStrategy implements BillingPackage {
  public monthlyBill(totalHours: number): number {
    return 0;
  }
}
