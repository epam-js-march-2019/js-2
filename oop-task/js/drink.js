function Drink(type, quantity) {
  Menu.call(this, type, quantity);
};

Drink.prototype = Object.create(Menu.prototype);
Drink.prototype.constructor = Drink;


Drink.COLA = {
  name: 'Coca-Cola',
  price: 50,
  calories: 40
};


Drink.COFFEE = {
  name: 'Coffee',
  price: 80,
  calories: 20
};

