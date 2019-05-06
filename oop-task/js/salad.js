function Salad(type, quantity) {
  Menu.call(this, type, quantity);
};

Salad.prototype = Object.create(Menu.prototype);
Salad.prototype.constructor = Salad;

Salad.CAESAR = {
  name: 'Caesar',
  price: 100,
  calories: 20
};

Salad.RUSSIAN_SALAD = {
  name: 'Russian_salad',
  price: 50,
  calories: 80
};



