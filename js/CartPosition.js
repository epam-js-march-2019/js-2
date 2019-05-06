function CartPosition(type, quantity) {
    this.type = type;
    this.name = type.name;
    this.quantity = quantity;
};

CartPosition.prototype.getType = function () {
    return this.type;
};

CartPosition.prototype.getName = function () {
    return this.name;
};

CartPosition.prototype.getQuantity = function () {
    return this.quantity;
};

CartPosition.prototype.calculatePrice = function () {
    return this.type.price;
};

CartPosition.prototype.calculateSubtotal = function () {
    return this.calculatePrice() * this.getQuantity();
};

CartPosition.prototype.calculateCalories = function () {
    return this.type.calories;
};


