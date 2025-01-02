export abstract class Weapon {
  protected weapon: Weapon | null = null;

  equip(weapon: Weapon): void {
    this.weapon = weapon;
  }

  abstract attack(): string;
}

export abstract class Sword extends Weapon {}

export class CopperSword extends Sword {
  attack(): string {
    return 'copper sword - 10pts';
  }
}

export class SteelSword extends Sword {
  attack(): string {
    return 'steel sword - 15pts';
  }
}

export class OakStaff extends Weapon {
  attack(): string {
    return 'magic from staff - 12pts';
  }
}
