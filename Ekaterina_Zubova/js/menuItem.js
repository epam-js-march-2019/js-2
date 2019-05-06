function MenuItem (obj) {
  this.name=obj.name;
  this.price=obj.price;
  this.calories=obj.calories;
}

MenuItem.prototype.getCalories = function() {
  return this.calories;
};

MenuItem.prototype.getPrice = function() {
  return this.price;
};