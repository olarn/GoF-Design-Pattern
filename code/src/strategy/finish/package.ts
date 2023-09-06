import { EmptyPackage } from "./EmptyPackage";
import { FixedPackage } from "./fixedPackage";
import { HourFlexPackage } from "./hourFlexPackage";
import { SteppingPackage } from "./SteppingPackage";
import { PackageType } from "./packageType";

export interface IPackage {
    monthlyBill(totalHours: number): number;
}

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

