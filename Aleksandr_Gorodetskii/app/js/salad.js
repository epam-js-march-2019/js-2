// MODULE DRINKS
var saladTypes = {
  TYPE_CAESAR: { param: "Caesar", price: 100, calorie: 20 },
  TYPE_OLIVIE: { param: "Olivie", price: 50, calorie: 80 }
};

function Salad(type, amount) {
  if (!!type.param && amount > 0) {
    this.type = type;
    this.amount = amount;
  } else {
    throw new OrderError("Needed amount");
  }
}

Salad.prototype = Object.create(FoodItem.prototype);
Salad.constructor = Salad;
