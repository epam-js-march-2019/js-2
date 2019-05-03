Hamburger.SIZE_SMALL = {
    name: 'Маленький гамбургер',
    price: 50,
    calories: 20
};

Hamburger.SIZE_LARGE = {
    name: 'Большой гамбургер',
    price: 100,
    calories: 40
};

Hamburger.STUFFING_CHEESE = {
    name: 'с сыром',
    price: 10,
    calories: 20
};

Hamburger.STUFFING_SALAD = {
    name: 'с салатом',
    price: 20,
    calories: 5
};

Hamburger.STUFFING_POTATO = {
    name: 'с картошечкой',
    price: 15,
    calories: 10
};

function Hamburger(type, stuffing, amount) {
    MenuFood.call(this, type, amount);
    this.stuffingHamburger = stuffing;
    this.amountHamburger = amount;
}

Hamburger.prototype = Object.create(MenuFood.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getPrice = function (){
    return (this.price + this.stuffingHamburger.price)*this.amountHamburger;
};

Hamburger.prototype.getKcal = function (){
    return (this.kcal + this.stuffingHamburger.calories)*this.amountHamburger;
};

Hamburger.prototype.getName = function () {
    return (this.name + " " + this.stuffingHamburger.name);
};