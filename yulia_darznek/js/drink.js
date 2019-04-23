Drink.COLA = {
  name: "cola",
  price: 50,
  calories: 40,
  unitValue: 1,
};
Drink.COFFEE = {
  name: "coffee",
  price: 80,
  calories: 20,
  unitValue: 1,
};

function Drink(type) {
  MenuItem.call(this, type);
}

Drink.prototype = Object.create(MenuItem.prototype);

Drink.prototype.constructor = Drink;