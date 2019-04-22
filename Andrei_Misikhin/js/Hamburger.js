Hamburger.SIZE_SMALL = {
  name: 'Мал. гамбургер',
  price: 50,
  calories: 20
}

Hamburger.SIZE_LARGE = {
  name: 'Бол. гамбургер',
  price: 100,
  calories: 40
}

Hamburger.STUFFING_CHEESE = {
  name: 'с сыром',
  price: 10,
  calories: 20
}

Hamburger.STUFFING_SALAD = {
  name: 'с салатом',
  price: 20,
  calories: 5
}

Hamburger.STUFFING_POTATO = {
  name: 'с картофелем',
  price: 15,
  calories: 10
}


function Hamburger(size, stuffing) {

  if (typeof stuffing.price !== 'number' || stuffing.price < 0) {
    throw ERR_PRICE;
  }
  if (typeof stuffing.calories !== 'number' || stuffing.calories < 0) {
    throw ERR_CALORIES;
  }
  if (typeof stuffing.name !== 'string' || stuffing.name === '') {
    throw ERR_NAME;
  }

  Food.call(this, size);
  this.stuffing = stuffing;

}


Hamburger.prototype = Object.create(Food.prototype);
Hamburger.prototype.constructor = Hamburger;


Hamburger.prototype.getPrice = function() {

  return this.price + this.stuffing.price;

}


Hamburger.prototype.getCalories = function() {

  return this.calories + this.stuffing.calories;

}


Hamburger.prototype.getStuffingName = function() {

  return this.stuffing.name;

}