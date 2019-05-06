function Hamburger(size, quantity, stuffing) {
  Menu.call(this, size, quantity);
  this.stuffing = stuffing;
  this.name = size.name + ' hamburger ' + stuffing.name;
};

Hamburger.prototype = Object.create(Menu.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.SIZE_SMALL = {
  name: 'Small',
  price: 50,
  calories: 20
};
Hamburger.SIZE_BIG = {
  name: 'Big',
  price: 100,
  calories: 40
};






Hamburger.STUFFING_CHEESE = {
  name: 'Cheese',
  price: 10,
  calories: 20
};
Hamburger.STUFFING_SALAD = {
  name: 'Salad',
  price: 20,
  calories: 5
};
Hamburger.STUFFING_POTATO = {
  name: 'Potato',
  price: 15,
  calories: 10
};


