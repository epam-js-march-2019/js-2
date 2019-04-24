
function Burger(size, stuffing) {
    this.name = "Burger";
    this.type = size;
    this.stuffing = stuffing;
    switch (size) {
        case "small":
            this.price = 50;
            this.kcal = 20;
            break;
        case "big":
            this.price = 100;
            this.kcal = 40;
            break;
    };
    switch (stuffing) {
        case "cheese":
            this.price += 10;
            this.kcal += 20;
            break;
        case "salad":
            this.price += 20;
            this.kcal += 5;
            break;
        case "potato":
            this.price += 15;
            this.kcal += 10;
            break;
    };

    Food.call(this,arguments);
};

Burger.prototype = Object.create(Food.prototype);
Burger.prototype.constructor = Burger;

