import { PizzaOrder, PizzaSize, PizzaStyle, PizzaType } from "./pizza";
import { CheesePizzaFactory } from "./pizzaFactory/cheesePizzaFactory";
import { ClassicPizzaFactory } from "./pizzaFactory/classicPizzaFactory";
import { SeafoodPizzaFactory } from "./pizzaFactory/seafoodPizzaFactory";

export class PizzaStore {
  orderPizza(order: PizzaOrder) {
    if (order.type === PizzaType.Cheese) {
      return new CheesePizzaFactory().bakePizza(order.style, order.size);
    }

    if (order.type === PizzaType.Seafood) {
      return new SeafoodPizzaFactory().bakePizza(order.style, order.size);
    }

    return new ClassicPizzaFactory().bakePizza(order.style, order.size);
  }
}
