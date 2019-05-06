function Menu(type, quantity = 1) {
  this.type = type;
  this.name = type.name;
  this.quantity = quantity

}

Menu.prototype.getType = function () {
  return this.type;
};

Menu.prototype.getName = function () {
  return this.name;
};


Menu.prototype.calculatePrice = function () {
  return this.quantity * this.type.price;
};

Menu.prototype.calculateCalories = function () {
  return this.quantity * this.type.calories;
};