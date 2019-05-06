function Salad (name, weight) {
  MenuItem.call(this, name);
  this.UNIT="gramm";
  this.UNIT_VALUE=100;
  this.weight=weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getCalories = function() {
  return this.calories*this.weight/this.UNIT_VALUE;
};

Salad.prototype.getPrice = function() {
  return this.price*this.weight/this.UNIT_VALUE;
};

Salad.OLIVIE= {
  name: "olivie",
  price: 50,
  calories: 20
}

Salad.CAESAR= {
  name: "caesar",
  price: 50,
  calories: 20
}