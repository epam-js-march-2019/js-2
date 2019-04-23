Salad.CEASAR = {
  name: "ceasar",
  price: 100,
  calories: 20,
  unitValue: 100
};
Salad.RUSSIAN = {
  name: "russian salad",
  price: 50,
  calories: 80,
  unitValue: 100
};

function Salad(type) {
  MenuItem.call(this, type);
}

Salad.prototype = Object.create(MenuItem.prototype);

Salad.prototype.constructor = Salad;