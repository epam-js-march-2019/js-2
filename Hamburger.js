Hamburger.SIZE_SMALL = {
    name: 'Little hamburger',
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
    name: 'with potato',
    price: 15,
    calories: 10
};


function Hamburger(size, stuffing) {

    AllFood.call(this, size);
    this.stuffing = stuffing;

}


Hamburger.prototype = Object.create(AllFood.prototype);
Hamburger.prototype.constructor = Hamburger;


Hamburger.prototype.getPrice = function() {

    return this.price + this.stuffing.price;

}


Hamburger.prototype.getCalories = function() {

    return this.calories + this.stuffing.calories;

}


Hamburger.prototype.getStuffingName = function() {

    return this.stuffing.name;

}
