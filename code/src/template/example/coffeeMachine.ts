export class CoffeeMachine {
  private waterIsBoilded = false;
  private CoffeeGrindsIsBrewed = false;
  private pouredInCup = false;
  private sugarAndMilkAdded = false;

  public brew(): string {
    this.boildWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addSugarAndMilk();

    return 'Here is your coffee!';
  }

  private brewCoffeeGrinds() {
    this.CoffeeGrindsIsBrewed = true;
  }

  private boildWater() {
    this.waterIsBoilded = true;
  }

  private pourInCup() {
    this.pouredInCup = true;
  }

  private addSugarAndMilk() {
    this.sugarAndMilkAdded = true;
  }
}
