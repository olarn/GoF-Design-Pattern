import { UnknownBillingStrategy } from './unknownBillingStrategy';
import { FixedPackage } from './fixedPackage';
import { HourFlexPackage } from './hourFlexPackage';
import { PackageType } from './packageType';
import { BillingPackage } from './billingPackage';
import { SteppingPackage } from './steppingPackage';

export class PackageFactory {
  public static buildPackage(packageType: PackageType): BillingPackage {
    if (packageType === PackageType.FIXED) {
      return new FixedPackage();
    }
    if (packageType === PackageType.HOUR_FLEX) {
      return new HourFlexPackage();
    }
    if (packageType === PackageType.STEPPING) {
      return new SteppingPackage();
    }

    return new UnknownBillingStrategy();
  }
}
