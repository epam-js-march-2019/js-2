function Hamburger (stuffing, size) {
  let obj = {name: size.name + ' ' + stuffing.name,
         price: size.price + stuffing.price,
         calories: size.calories + stuffing.calories};
  MenuItem.call(this, obj);
  this.size = size;
  this.stuffing = stuffing;
  this.UNIT="piece";
  this.UNIT_VALUE=1;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getSize = function() {
  return this.size.name;
};

Hamburger.prototype.getStuffing = function() {
  return this.stuffing.name;
};

Hamburger.SIZE_SMALL = {
  name: "small hamburger",
  price: 50,
  calories: 20
}

Hamburger.SIZE_BIG = {
  name: "big hamburger",
  price: 50,
  calories: 20
}

Hamburger.STUFFING_CHEESE= {
  name: "with cheese",
  price: 50,
  calories: 20
}

Hamburger.STUFFING_POTATO= {
  name: "with potato",
  price: 50,
  calories: 20
}

Hamburger.STUFFING_SALAD= {
  name: "with salad",
  price: 50,
  calories: 20
}