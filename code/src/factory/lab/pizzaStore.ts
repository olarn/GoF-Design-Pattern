import { CheesePizza, Pizza, PizzaType, PlainPizza, SeafoodPizza } from "./pizza";

export class PizzaStore {
    orderPizza(type: PizzaType) {
        var pizza: Pizza;
        
        switch (type) {
            case PizzaType.Cheese:
                pizza = new CheesePizza();
                break;
            case PizzaType.Seafood:
                pizza = new SeafoodPizza();
                break;
            default:
                pizza = new PlainPizza();
                break;
        }

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}

