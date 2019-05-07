// ORDER MODULE
function Order() {
  this.dishes = [];
  this.isPaid = false;
}

var order = new Order();

Order.prototype.getPaid = function() {
  return this.isPaid;
};

Order.prototype.getDishes = function() {
  return this.dishes;
};

Order.prototype.addToOrder = function(item) {
  if (!this.getPaid()) {
    this.dishes.push(item);
  } else {
    throw new OrderError("The order is already paid");
  }
};

Order.prototype.deletePositionFromOrder = function(index) {
  if (!this.getPaid()) {
    var dishPosition = index;
    this.getDishes().splice(dishPosition, 1);
  } else {
    throw new OrderError("Rejected. The order is already paid");
  }
};

Order.prototype.calculateTotalPrice = function() {
  var thisOrder = this.getDishes();
  if (thisOrder.length >= 0) {
    var totalPrice = 0;
    for (var index = 0; index < thisOrder.length; index++) {
      totalPrice += thisOrder[index].calculatePrice();
    }
    return totalPrice;
  }
};

Order.prototype.calculateTotalCalories = function() {
  var thisOrder = this.getDishes();
  if (thisOrder.length >= 0) {
    var totalCalories = 0;
    for (var index = 0; index < thisOrder.length; index++) {
      totalCalories += thisOrder[index].calculateCalories();
    }
    return totalCalories;
  } 
};

Order.prototype.pay = function() {
  this.isPaid = true;
  Object.freeze(this.dishes);
};

