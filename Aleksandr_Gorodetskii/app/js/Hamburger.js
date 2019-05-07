function Hamburger(size, stuffing) {
  if (!!size.param && !!stuffing.param) {
    this.size = size;
    this.stuffing = stuffing;
  } else {
    throw new OrderError("Need size and stuffing");
  }
}

var hamburgerTypes = {
  SIZE_SMALL: { param: "SIZE_SMALL", price: 50, calorie: 20 },
  SIZE_LARGE: { param: "SIZE_LARGE", price: 100, calorie: 40 },
  STUFFING_CHEESE: { param: "STUFFING_CHEESE", price: 10, calorie: 20 },
  STUFFING_SALAD: { param: "STUFFING_SALAD", price: 20, calorie: 5 },
  STUFFING_POTATO: { param: "STUFFING_POTATO", price: 15, calorie: 5 }
};

Hamburger.prototype.getSize = function() {
  return this.size.param;
};

Hamburger.prototype.getStuffing = function() {
  return this.stuffing.param;
};

Hamburger.prototype.calculatePrice = function() {
  var thisParams = this;
  var totalPrice = null;
  var mainPrice = thisParams.size.price;
  var stuffPrice = thisParams.stuffing.price;

  totalPrice = mainPrice + stuffPrice;

  return totalPrice;
}; 

Hamburger.prototype.calculateCalories = function() {
  var thisParams = this;
  var totalCalories;
  var mainPrice = thisParams.size.calorie;
  var stuffPrice = thisParams.stuffing.calorie;

  totalCalories = mainPrice + stuffPrice;

  return totalCalories;
};
