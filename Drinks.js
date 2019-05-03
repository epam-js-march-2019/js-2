Drink.COLA = {
    name: 'Кола',
    price: 50,
    calories: 40
};

Drink.COFFEE = {
    name: 'Кофе',
    price: 80,
    calories: 20
};

function Drink(type, amount) {
    MenuFood.call(this, type, amount);
    this.amountDrink = amount;
}

Drink.prototype = Object.create(MenuFood.prototype);
Drink.prototype.constructor = Drink;

Drink.prototype.getPrice = function (){
    return this.price*this.amountDrink;
};

Drink.prototype.getKcal = function (){
    return this.kcal*this.amountDrink;
};