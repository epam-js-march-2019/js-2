function Order() {
  this.items = [];
  this.isPaid = false;
  this.orderPriceTotal = 0;
  this.orderCalories = 0;
}

Order.prototype.addItemToOrder = function (item) {
  this.items.push(item)
}

Order.prototype.removeItem = function (item) {
  if (!order.isPaid) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}

Order.prototype.pay = function () {
  this.isPaid = true;
}


Order.prototype.calculateTotal = function () {
  var orderPriceTotal = 0;
  this.items.forEach(function (elm) {
    orderPriceTotal += elm.priceTotal
  })
  return Math.round(orderPriceTotal)
}

Order.prototype.calculateCalories = function () {
  var orderCalories = 0;
  this.items.forEach(function (elm) {
    orderCalories += elm.caloriesTotal
  })
  return Math.round(orderCalories)
}