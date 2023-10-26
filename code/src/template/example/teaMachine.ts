export class TeaMachine {
  private waterIsBoilded = false;
  private TeaGrindsIsBrewed = false;
  private pouredInCup = false;
  private sugarAdded = false;

  public brew(): string {
    this.boildWater();
    this.brewTeaGrinds();
    this.pourInCup();
    this.addSugar();

    return 'Here is your tea!';
  }

  private brewTeaGrinds() {
    this.TeaGrindsIsBrewed = true;
  }

  private boildWater() {
    this.waterIsBoilded = true;
  }

  private pourInCup() {
    this.pouredInCup = true;
  }

  private addSugar() {
    this.sugarAdded = true;
  }
}
