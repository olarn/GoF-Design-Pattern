import { PizzaSize, PizzaStyle, PizzaType } from './pizza';
import { PizzaStore } from './pizzaStore';

describe('[Factory - lab] OrderPizza from pizza store', () => {
  it('should return an Italian pizza', () => {
    const pizzaStore = new PizzaStore();
    const pizza = pizzaStore.orderPizza(
      PizzaStyle.Italian,
      PizzaType.Classic,
      PizzaSize.Small
    );
    expect(pizza.description()).toBe(
      'Pizza Classic, Small, Thin, Mozzarella, Tomato, Basil'
    );
  });

  it('should return an Italian cheese pizza', () => {
    const pizzaStore = new PizzaStore();
    const pizza = pizzaStore.orderPizza(
      PizzaStyle.Italian,
      PizzaType.Cheese,
      PizzaSize.Small
    );
    expect(pizza.description()).toBe(
      'Pizza Cheese, Small, Thick, Parmesan, Basil, Olive, Onion'
    );
  });

  it('should return an American seafood pizza', () => {
    const pizzaStore = new PizzaStore();
    const pizza = pizzaStore.orderPizza(
      PizzaStyle.American,
      PizzaType.Seafood,
      PizzaSize.Small
    );
    expect(pizza.description()).toBe(
      'Pizza Seafood, Small, Thick, Mozzarella, Tomato, Onion, Shrimp, Tuna'
    );
  });
});
