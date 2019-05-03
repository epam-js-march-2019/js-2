function MenuFood (params, quantity) {
    this.name = params.name;
    this.price = params.price;
    this.kcal = params.calories;
    this.amount = quantity;
}

MenuFood.prototype.getPrice = function() {
    return this.price;
};

MenuFood.prototype.getKcal = function() {
    return this.kcal;
};

MenuFood.prototype.getName = function() {
    return this.name;
};

MenuFood.prototype.getAmount = function () {
  return this.amount;
};

