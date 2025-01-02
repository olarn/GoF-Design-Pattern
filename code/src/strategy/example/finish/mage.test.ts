import { Mage } from './character';
import { OakStaff } from './weapon';

describe('[finish] Mage', () => {
  test('should be able to attack with magic from staff', () => {
    const mage = new Mage();
    mage.equip(new OakStaff());
    expect(mage.attack()).toBe('Mage attack with magic from staff - 12pts');
  });
});
