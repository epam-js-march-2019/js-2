Salad.CAESAR = {
  name: 'Салат Цезарь',
  price: 100,
  calories: 20
}

Salad.OLIVIE = {
  name: 'Салат Оливье',
  price: 50,
  calories: 80
}


function Salad(props, weight) {

  if (typeof weight !== 'number' || weight <= 0) {
    throw ERR_SALAD_WEIGHT;
  }

  Food.call(this, props)
  this.weight = weight;

}


Salad.prototype = Object.create(Food.prototype);
Salad.prototype.constructor = Salad;


Salad.prototype.getPrice = function() {

  return this.price * this.weight / 100;

}


Salad.prototype.getCalories = function() {

  return this.calories * this.weight / 100;

}


Salad.prototype.getWeight = function() {

  return this.weight;
  
}