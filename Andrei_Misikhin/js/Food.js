function Food(props) {

  if (typeof props.price !== 'number' || props.price < 0) {
    throw ERR_PRICE;
  }
  if (typeof props.calories !== 'number' || props.calories < 0) {
    throw ERR_CALORIES;
  }
  if (typeof props.name !== 'string' || props.name === '') {
    throw ERR_NAME;
  }

  this.price = props.price;
  this.calories = props.calories;
  this.name = props.name;

}


Food.prototype.getPrice = function() {

  return this.price;

}


Food.prototype.getCalories = function() {

  return this.calories;

}


Food.prototype.getName = function() {

  return this.name;

}