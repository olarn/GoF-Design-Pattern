export interface BillingPackage {
  monthlyBill(totalHours: number): number;
}
