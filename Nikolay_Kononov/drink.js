function Drink(args) {
    Food.call(this, args);
}

cola = {
    name: "Coca Cola",
    price: 50,
    calories: 40
};

coffee ={
    name: "Coffee",
    price: 80,
    calories: 20
};

Drink.prototype = Object.create(Food.prototype);
Drink.prototype.constructor = Drink;

Drink.prototype.getName = function() {
    return this.name;
};


