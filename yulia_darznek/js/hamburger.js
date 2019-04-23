Hamburger.LARGE = {
  name: "hamburger large",
  price: 100,
  calories: 40,
  unitValue: 1
};
Hamburger.SMALL = {
  name: "hamburger small",
  price: 50,
  calories: 20,
  unitValue: 1
};
Hamburger.STUFFING_CHEESE = {
  name: "cheese",
  price: 10,
  calories: 20
};
Hamburger.STUFFING_SALAD = {
  name: "salad",
  price: 20,
  calories: 5
};
Hamburger.STUFFING_POTATOES = {
  name: "potato",
  price: 15,
  calories: 10
};

function Hamburger(size, stuffing) {
  MenuItem.call(this, size);

  this.stuffing = stuffing.name;
  this.price += stuffing.price;
  this.calories += stuffing.calories;
}

Hamburger.prototype = Object.create(MenuItem.prototype);

Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getStuffingName = function () {
  return this.stuffing.name;
}