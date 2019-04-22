Drink.COLA = {
  name: 'Кола',
  price: 50,
  calories: 40
}

Drink.COFFEE = {
  name: 'Кофе',
  price: 80,
  calories: 20
}


function Drink(props) {

  Food.call(this, props);

}


Drink.prototype = Object.create(Food.prototype);
Drink.prototype.constructor = Drink;