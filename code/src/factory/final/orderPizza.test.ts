import { PizzaOrder, PizzaSize, PizzaStyle, PizzaType } from './pizza';
import { PizzaStore } from './pizzaStore';

describe('orderPizza from pizza store', () => {
  it('should return an Italian pizza', () => {
    const pizzaStore = new PizzaStore();
    const order = new PizzaOrder(
      PizzaStyle.Italian,
      PizzaType.Classic,
      PizzaSize.Small,
    );
    const pizza = pizzaStore.orderPizza(order);
    expect(pizza.description()).toBe(
      'Pizza Classic, Small, Thin, Mozzarella, Tomato, Basil',
    );
  });

  it('should return an Italian cheese pizza', () => {
    const pizzaStore = new PizzaStore();
    const order = new PizzaOrder(
      PizzaStyle.Italian,
      PizzaType.Cheese,
      PizzaSize.Small,
    );
    const pizza = pizzaStore.orderPizza(order);
    expect(pizza.description()).toBe(
      'Pizza Cheese, Small, Thick, Parmesan, Basil, Olive, Onion',
    );
  });

  it('should return an American seafood pizza', () => {
    const pizzaStore = new PizzaStore();
    const order = new PizzaOrder(
      PizzaStyle.American,
      PizzaType.Seafood,
      PizzaSize.Small,
    );
    const pizza = pizzaStore.orderPizza(order);
    expect(pizza.description()).toBe(
      'Pizza Seafood, Small, Thick, Mozzarella, Tomato, Onion, Shrimp, Tuna',
    );
  });
});
