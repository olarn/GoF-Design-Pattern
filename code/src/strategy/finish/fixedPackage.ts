import { IPackage } from "./package";


export class FixedPackage implements IPackage {
    public monthlyBill(totalHours: number): number {
        return 500;
    }
}
