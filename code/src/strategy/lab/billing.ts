export enum PackageType {
  FIXED = 'FIXED',
  HOUR_FLEX = 'HOUR_FLEX',
  STEPPING = 'STEPPING',
  UNKNOWN = 'UNKNOWN',
}

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = 0.0;
    if (this.packageType === PackageType.FIXED) {
      total = 500;
    } else if (this.packageType === PackageType.HOUR_FLEX) {
      total = this.totalHours * 50;
    } else total = 0;

    return total + (total * this.vatRate) / 100;
  }
}
