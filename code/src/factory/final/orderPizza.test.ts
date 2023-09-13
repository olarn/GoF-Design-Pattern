import { PizzaType } from "./pizza";
import { PizzaStore } from "./pizzaStore";

describe('orderPizza plain from pizza store', () => {
    it('should return a pizza', () => {
        const pizzaStore = new PizzaStore();
        const pizza = pizzaStore.orderPizza(PizzaType.Plain);
        expect(pizza.describe()).toEqual('Plain Pizza, cut 6 pieces, medium boxed');
    });

    it('should return a cheese pizza', () => {
        const pizzaStore = new PizzaStore();
        const pizza = pizzaStore.orderPizza(PizzaType.Cheese);
        expect(pizza.describe()).toEqual('Pizza with cheese, cut 6 pieces, medium boxed');
    });

    it('should return a seafood pizza', () => {
        const pizzaStore = new PizzaStore();
        const pizza = pizzaStore.orderPizza(PizzaType.Seafood);
        expect(pizza.describe()).toEqual('Pizza with seafood ingrediants, cut 6 pieces, medium boxed');
    });
});