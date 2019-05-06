function Drink (name) {
  MenuItem.call(this, name);
  this.UNIT="piece";
  this.UNIT_VALUE=1;
}


Drink.prototype = Object.create(MenuItem.prototype);
Drink.prototype.constructor = Drink;

Drink.COLA= {
  name: "Cola",
  price: 50,
  calories: 20,
}

Drink.COFFEE= {
  name: "Coffee",
  price: 50,
  calories: 20,
}