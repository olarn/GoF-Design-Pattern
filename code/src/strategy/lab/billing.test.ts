import { Billing, PackageType } from './billing';

describe('[Strategy - begin] Generate monthly billing based-on total hours and package type', () => {
  it('should always return package price for fixed package', () => {
    // given
    const totalHours = 10;
    const packageType = PackageType.FIXED;

    // when
    const billing = new Billing(totalHours, packageType);

    // then
    expect(billing.monthlyBill()).toBe(535);
  });

  it('should always return total hours * 50 for variable package', () => {
    // given
    const totalHours = 10;
    const packageType = PackageType.HOUR_FLEX;

    // when
    const billing = new Billing(totalHours, packageType);

    // then
    expect(billing.monthlyBill()).toBe(535);
  });

  it('should always return 0 for unknown package', () => {
    // given
    const totalHours = 10;
    const packageType = PackageType.UNKNOWN;

    // when
    const billing = new Billing(totalHours, packageType);

    // then
    expect(billing.monthlyBill()).toBe(0);
  });
});
