export class Pizza {
  public type: PizzaType = PizzaType.Cheese;
  public size: PizzaSize = PizzaSize.Undefined;
  public bread: BreadType = BreadType.Undefined;
  public cheese: CheezeType = CheezeType.Undefined;
  public sausage: boolean = false;
  public ingredients: Ingredient[] = [];
  description() {
    return `Pizza ${PizzaType[this.type]}, ${this.size}, ${this.bread}, ${
      this.cheese
    }, ${this.ingredients.map((i) => Ingredient[i]).join(", ")}`;
  }
}

export enum PizzaStyle {
  Italian = "Italian",
  American = "American",
}

export enum PizzaType {
  Cheese = "Cheese",
  Seafood = "Seafood",
  Classic = "Classic",
}

export enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Undefined = "Undefined",
}

export enum BreadType {
  Thin = "Thin",
  Thick = "Thick",
  Undefined = "Undefined",
}

export enum CheezeType {
  Mozzarella = "Mozzarella",
  Parmesan = "Parmesan",
  Undefined = "Undefined",
}

export enum SausageType {
  Pork = "Pork",
  Beef = "Beef",
  Chicken = "Chicken",
  Undefined = "Undefined",
}

export enum Ingredient {
  Tomato,
  Onion,
  Pepper,
  Mushroom,
  Olive,
  Basil,
  Garlic,
  Ham,
  Bacon,
  Chicken,
  Beef,
  Pepperoni,
  Salami,
  Tuna,
  Shrimp,
  Anchovy,
  Clam,
}
