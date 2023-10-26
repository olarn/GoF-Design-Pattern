import {
  BreadType,
  CheezeType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';

export class PizzaStore {
  orderPizza(style: PizzaStyle, type: PizzaType, size: PizzaSize) {
    var pizza: Pizza = new Pizza();
    if (type === PizzaType.Classic) {
      pizza.type = type;
      pizza.size = size;
      if (style === PizzaStyle.Italian) {
        pizza.bread = BreadType.Thin;
      } else {
        pizza.bread = BreadType.Thick;
      }
      pizza.cheese = CheezeType.Mozzarella;
      pizza.ingredients = [Ingredient.Tomato, Ingredient.Basil];
    } else if (type === PizzaType.Cheese) {
      pizza.type = type;
      pizza.size = size;
      pizza.bread = BreadType.Thick;
      pizza.cheese = CheezeType.Parmesan;
      if (style === PizzaStyle.Italian) {
        pizza.ingredients = [
          Ingredient.Basil,
          Ingredient.Olive,
          Ingredient.Onion,
        ];
      } else {
        pizza.ingredients = [
          Ingredient.Tomato,
          Ingredient.Basil,
          Ingredient.Olive,
          Ingredient.Onion,
        ];
      }
    } else if (type === PizzaType.Seafood) {
      pizza.type = type;
      pizza.size = size;
      if (style === PizzaStyle.Italian) {
        pizza.bread = BreadType.Thin;
      } else {
        pizza.bread = BreadType.Thick;
      }
      pizza.cheese = CheezeType.Mozzarella;
      pizza.ingredients = [
        Ingredient.Tomato,
        Ingredient.Onion,
        Ingredient.Shrimp,
        Ingredient.Tuna,
      ];
    }
    return pizza;
  }
}
