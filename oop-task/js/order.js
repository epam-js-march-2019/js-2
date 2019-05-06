function Order() {
  this.items = [].slice.call(arguments);
  this.isPaid = false;
}

Order.prototype.getItems = function () {
  return this.items;
};

Order.prototype.getPayInfo = function () {
  return this.isPaid;
};

Order.prototype.payForTheOrder = function () {
  this.isPaid = true;
  alert('Your order is paid! Thank you!');
};

Order.prototype.addPosition = function (position) {
  if (!this.isPaid) {
    this.items.push(position);
  } else {
    alert('Ooops! Order has already been paid.');
  }
};

Order.prototype.deletePosition = function (index) {
  if (!this.isPaid) {
    this.items = this.items.filter((item, i) => {
      return i !== Number(index)
    })
  } else {
    alert('Sorry, your order has already been paid.');
  }
};


Order.prototype.deleteAllPosition = function () {
  this.items = [];
  this.isPaid = false;
}




Order.prototype.calculateTotalPrice = function () {
  var totalPrice = 0;
  if (!this.items.length) {
  } else {
    this.items.forEach(function (item) {
      totalPrice += item.calculatePrice();
    });
  }
  return totalPrice;
};

Order.prototype.calculateTotalCalories = function () {
  var totalCalories = 0;
  if (!this.items.length) {
  } else {
    this.items.forEach(function (item) {
      totalCalories += item.calculateCalories();
    });
  }
  return totalCalories;
};