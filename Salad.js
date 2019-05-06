Salad.CAESAR = {
    name: 'salad caesar',
    price: 100,
    calories: 20
};

Salad.OLIVIE = {
    name: 'salad olivie',
    price: 50,
    calories: 80
};


function Salad(props) {

    AllFood.call(this, props)


}


Salad.prototype = Object.create(AllFood.prototype);
Salad.prototype.constructor = Salad;


Salad.prototype.getPrice = function() {

    return this.price;

}


Salad.prototype.getCalories = function() {

    return this.calories;

}


