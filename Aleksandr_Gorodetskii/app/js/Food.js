function FoodItem(itemType) {
  this._itemType = itemType;
}

FoodItem.prototype.calculatePrice = function() {
  var thisParams = this;
  var totalPrice = null;
  var partialPrice = thisParams.type.price;
  var mililitres = thisParams.amount;
 
  totalPrice = (partialPrice * mililitres) / 100;

  return totalPrice;
};

FoodItem.prototype.calculateCalories = function() {
  var thisParams = this;
  var totalCalories = null;
  var mainPrice = thisParams.type.calorie;
  var mililitres = thisParams.amount;

  totalCalories = (mainPrice * mililitres) / 100;

  return totalCalories;
};
