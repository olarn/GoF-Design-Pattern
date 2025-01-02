import { Knight } from './character';
import { CopperSword, OakStaff, SteelSword } from './weapon';

describe('[finish] Knight', () => {
  const knight = new Knight();

  test('should be able to attack with sword', () => {
    knight.equip(new CopperSword());
    expect(knight.attack()).toBe('Knight attack with copper sword - 10pts');
  });

  test('should attack stronger with steel sword', () => {
    knight.equip(new SteelSword());
    expect(knight.attack()).toBe('Knight attack with steel sword - 15pts');
  });

  test('should ba able equip only sword', () => {
    expect(() => knight.equip(new OakStaff())).toThrowError(
      'Knight can only equip sword'
    );
  });
});
