import { EmptyPackage } from "./emptyPackage";
import { FixedPackage } from "./fixedPackage";
import { HourFlexPackage } from "./hourFlexPackage";
import { PackageType } from "./packageType";
import { IPackage } from "./IPackage";
import { SteppingPackage } from "./steppingPackage";

export class PackageFactory {
  public static buildPackage(packageType: string): IPackage {
    if (packageType === PackageType.FIXED) {
      return new FixedPackage();
    }
    if (packageType === PackageType.HOUR_FLEX) {
      return new HourFlexPackage();
    }
    if (packageType === PackageType.STEPPING) {
      return new SteppingPackage();
    }

    return new EmptyPackage();
  }
}
