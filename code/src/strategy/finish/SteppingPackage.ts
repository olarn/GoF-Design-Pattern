import { IPackage } from "./package";


export class SteppingPackage implements IPackage {
    public monthlyBill(totalHours: number): number {
        if (totalHours <= 50) {
            return totalHours;
        }
        return 50 + ((totalHours - 50) * 0.5);
    }
}
