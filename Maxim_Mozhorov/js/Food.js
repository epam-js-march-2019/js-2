function Food(props) {
    Order.totalPrice += this.price;
    Order.totalKcal += this.kcal;
    Order.items.push(this);
};


Food.prototype.GetPrice = function () {
    return this.price;
};

Food.prototype.GetKcal = function () {
    return this.kcal;
};


