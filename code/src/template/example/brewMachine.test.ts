import { CoffeeMachine } from "./coffeeMachine";
import { TeaMachine } from "./teaMachine";

describe('BrewMachine', () => {
    it('should be able to brew coffee', () => {
        const coffeeMachine = new CoffeeMachine();
        expect(coffeeMachine.brew()).toBe('Here is your coffee!');
    });

    it('should be able to brew tea', () => {
        const teaMachine = new TeaMachine();
        expect(teaMachine.brew()).toBe('Here is your tea!');
    });
});