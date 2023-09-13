export enum PizzaType {
    Cheese,
    Seafood,
    Plain
}

export interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
    describe(): string;
}

export class CheesePizza implements Pizza {
    private description = '';
    prepare() { this.description += 'Pizza'; }
    bake() { this.description += ' with cheese'; }
    cut() { this.description += ', cut 6 pieces'; }
    box() { this.description += ', medium boxed'; }
    describe() {
        return this.description;
    }
}

export class PlainPizza implements Pizza {
    private description = '';
    prepare() { this.description += 'Plain Pizza'; }
    bake() { this.description += ''; }
    cut() { this.description += ', cut 6 pieces'; }
    box() { this.description += ', medium boxed'; }
    describe() {
        return this.description;
    }
}

export class SeafoodPizza implements Pizza {
    private description = '';
    prepare() { this.description += 'Pizza'; }
    bake() { this.description += ' with seafood ingrediants'; }
    cut() { this.description += ', cut 6 pieces'; }
    box() { this.description += ', medium boxed'; }
    describe() {
        return this.description;
    }
}