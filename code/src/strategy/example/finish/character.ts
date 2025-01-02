import { Sword, Weapon } from './weapon';

export interface Character {
  equip(weapon: Weapon): void;
  attack(): string;
}

export class Knight implements Character {
  private weapon: Weapon | null = null;

  attack(): string {
    return `Knight attack with ${this.weapon?.attack()}`;
  }

  equip(weapon: Weapon): void {
    if (!(weapon instanceof Sword)) {
      throw new Error('Knight can only equip sword');
    }
    this.weapon = weapon;
  }
}

export class Mage implements Character {
  private weapon: Weapon | null = null;

  attack(): string {
    return `Mage attack with ${this.weapon?.attack()}`;
  }

  equip(weapon: Weapon): void {
    this.weapon = weapon;
  }
}
