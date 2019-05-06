function Drink(type, quantity) {
    CartPosition.call(this, type, quantity);
};

Drink.prototype = Object.create(CartPosition.prototype);
Drink.prototype.constructor = Drink;

Drink.COLA = {
    name: 'Cola',
    price: 50,
    calories: 40
};
Drink.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20
};
