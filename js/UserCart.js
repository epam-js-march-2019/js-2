function UserCart() {
    this.items = [].slice.call(arguments);
    this.isPaid = false;
};

UserCart.prototype.getItems = function () {    
    return this.items;
};

UserCart.prototype.getPaymentStatus = function () {
    return this.isPaid;
};

UserCart.prototype.makePayment = function () {
    this.isPaid = true;        
};

UserCart.prototype.addToCart = function (position) {
    this.items.push(position);
};

UserCart.prototype.deleteFromCart = function (position) {
    this.items.splice(position, 1);    
};

UserCart.prototype.emptyCart = function () {
    this.items.length = 0;
    this.isPaid = false;
};

UserCart.prototype.calculateTotalOrderValue = function () {
    var totalOrderValue = 0;
    if (!this.items.length) {
    } else {
        this.items.forEach(function (item) {
            totalOrderValue += item.calculateSubtotal();
        });
    }    
    return totalOrderValue;
};

UserCart.prototype.calculateTotalEnergyValue = function () {
    var totalEnergyValue = 0;
    if (!this.items.length) {
    } else {
        this.items.forEach(function (item) {
            totalEnergyValue += item.calculateCalories();
        });
    }    
    return totalEnergyValue;
};
