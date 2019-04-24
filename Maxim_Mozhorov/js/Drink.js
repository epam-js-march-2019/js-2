function Drink(type) {
    this.name = "Drink";
    this.type = type;
    switch (type) {
        case "cola":
            this.price = 50;
            this.kcal = 40;
            break;
        case "coffee":
            this.price = 80;
            this.kcal = 20;
            break;
    }
    Food.call(this,type);
};

Drink.prototype = Object.create(Food.prototype);
Drink.prototype.constructor = Drink;

