import { Knight, Mage } from './character';

describe('[begin] Character', () => {
  test('Knight should beable to attack with sword', () => {
    const knight = new Knight();
    expect(knight.attack()).toBe('Knight attack with sword');
  });

  test('Mage should beable to attack with magic from staff', () => {
    const mage = new Mage();
    expect(mage.attack()).toBe('Mage attack with magic from staff');
  });
});
