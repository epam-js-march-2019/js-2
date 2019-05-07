var drinkTypes = {
  TYPE_COLA: { param: "Cola", price: 50, calorie: 40 },
  TYPE_TEA: { param: "Tea", price: 80, calorie: 20 }
};

function Drink(type) {
  if (!!type.param) {
    this.type = type;
    this.amount = 100;
  } else {
    throw new OrderError("Needed amount");
  }
}

Drink.prototype = Object.create(FoodItem.prototype);
Drink.constructor = Drink;
 