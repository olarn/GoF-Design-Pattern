import { PackageFactory } from './packages/packageFactory';
import { PackageType } from './packages/packageType';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = PackageFactory.buildPackage(this.packageType).monthlyBill(
      this.totalHours,
    );
    return this.monthlyBillingIncludingVAT(total);
  }

  private monthlyBillingIncludingVAT(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
