function Order() {
  
  this.id = 0;
  this.list = {};
  this.isPaid = false;

  for (var i = 0; i < arguments.length; i++) {

    if (!(arguments[i] instanceof Food)) {
      throw ERR_NOT_FOOD;
    }

    this.list[this.id] = arguments[i];
    this.id++;
  };

}


Order.prototype.getPrice = function() {

  var sum = 0;
  for (var item in this.list) {
    sum += this.list[item].getPrice();
  }
  return sum;

}


Order.prototype.getCalories = function() {

  var sum = 0;
  for (var item in this.list) {
    sum += this.list[item].getCalories();
  }
  return sum;

}


Order.prototype.addListItem = function(item) {

  if (!(item instanceof Food)) {
    throw ERR_NOT_FOOD;
  }

  if (this.isPaid) {
    throw ERR_PAID;
  }

  this.list[this.id] = item;
  this.id++;

}


Order.prototype.deleteListItem = function(id) {

  if (typeof id !== 'string') {
    throw ERR_ITEM_ID;
  }

  if (this.isPaid) {
    throw ERR_PAID;
  } 
  
  delete this.list[id];

}


Order.prototype.payOrder = function() {
  
  if (!Object.keys(this.list).length) {
    throw ERR_EMPTY_ORDER;
  }

  if (this.isPaid) {
    throw ERR_PAID;
  }

  this.isPaid = true;

}


Order.prototype.payBackOrder = function() {

  if (!this.isPaid) {
    throw ERR_NOT_PAID;
  }

  this.isPaid = false;

}