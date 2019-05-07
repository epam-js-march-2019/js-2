function Hamburger(size, stuffling) {
    Food.call(this, size);
    this.stuffling = stuffling;
}

small = {
    name: "Small burger",
    price: 50,
    calories: 20
};

big = {
    name: "Big burger",
    price: 100,
    calories: 40
};

cheese = {
    name: "with cheese",
    price: 10,
    calories: 20
};

salad = {
    name: "with salad",
    price: 20,
    calories: 5
};

potato = {
    name: "with potato",
    price: 15,
    calories: 10
};

Hamburger.prototype = Object.create(Food.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getPrice = function() {
    return this.price + this.stuffling.price;
};

Hamburger.prototype.getCalories = function() {
    return this.calories + this.stuffling.calories;
};

Hamburger.prototype.getName = function(){
    return this.name.concat(" ", this.stuffling.name);
};

