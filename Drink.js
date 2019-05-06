
Drink.COLA = {
    name: 'cola',
    price: 50,
    calories: 40
};
Drink.COFFEE = {
    name: 'coffee',
    price: 80,
    calories: 20
};

function Drink(name,price,calories) {
    AllFood.apply(this, arguments);

}

Drink.prototype = Object.create(AllFood.prototype);
Drink.prototype.constructor = Drink;

