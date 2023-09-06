import { IPackage } from "./package";


export class EmptyPackage implements IPackage {
    public monthlyBill(totalHours: number): number {
        return 0;
    }
}
