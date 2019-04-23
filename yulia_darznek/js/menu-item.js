function MenuItem(params) {
  this.name = params.name;
  this.price = params.price;
  this.calories = params.calories;
  this.unitValue = params.unitValue;
  this.qty = 0;
  this.priceTotal = 0;
  this.caloriesTotal = 0;
}

MenuItem.prototype.getName = function () {
  return this.name
}

MenuItem.prototype.getPrice = function () {
  this.priceTotal = Math.round(this.qty / this.unitValue * this.price);
  return this.priceTotal;
}

MenuItem.prototype.getCalories = function () {
  this.caloriesTotal = Math.round(this.qty / this.unitValue * this.calories);
  return this.caloriesTotal;
}

MenuItem.prototype.updateParams = function () {
  this.getCalories();
  this.getPrice()
}