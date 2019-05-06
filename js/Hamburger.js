function Hamburger(size, quantity, stuffing) {
    CartPosition.call(this, size, quantity);
    this.stuffing = stuffing;
    this.name = size.name + ' ' + stuffing.name;
};

Hamburger.prototype = Object.create(CartPosition.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.SIZE_SMALL = {
    name: 'Small hamburger',
    price: 50,
    calories: 20
};
Hamburger.SIZE_LARGE = {
    name: 'Big hamburger',
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    name: 'with cheese',
    price: 10,
    calories: 20
};
Hamburger.STUFFING_SALAD = {
    name: 'with salad',
    price: 20,
    calories: 5
};
Hamburger.STUFFING_POTATO = {
    name: 'with potatoes',
    price: 15,
    calories: 10
};

Hamburger.prototype.getSize = function () {
    return this.type;
};

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    return this.getSize().price + this.getStuffing().price;
};

Hamburger.prototype.calculateCalories = function () {
    return this.getSize().calories + this.getStuffing().calories;
};
