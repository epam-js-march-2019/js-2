function Salad(type, quantity) {
    CartPosition.call(this, type, quantity);
};

Salad.prototype = Object.create(CartPosition.prototype);
Salad.prototype.constructor = Salad;

Salad.CAESAR = {
    name: 'Caesar',
    price: 100,
    calories: 20
};
Salad.OLIVIER = {
    name: 'Olivier',
    price: 50,
    calories: 80
};

Salad.prototype.calculateSubtotal = function () {
    return this.getType().price * this.getQuantity() / 100;
};

Salad.prototype.calculateCalories = function () {
    return this.getType().calories * this.getQuantity() / 100;
};
