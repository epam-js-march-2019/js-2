Salad.CAESAR = {
    name: 'Цезарь',
    price: 50,
    calories: 80
};

Salad.RUSSIAN_SALAD = {
    name: 'Оливье',
    price: 100,
    calories: 20
};

function Salad(type, amount) {
    MenuFood.call(this, type, amount);
    this.amountSalad = amount;
}

Salad.prototype = Object.create(MenuFood.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getPrice = function (){
    return this.price*this.amountSalad/100;
};

Salad.prototype.getKcal = function (){
    return this.kcal*this.amountSalad/100;
};