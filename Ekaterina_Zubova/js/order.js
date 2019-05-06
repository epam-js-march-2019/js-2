var Order = (function () {
  var instance;
  
  function Order () {
    this.calories=0;
    this.price=0;
    this.items=[];
    this.isPaid = false;
    if (!instance) instance=this;
    else return instance;
  }
  
  Order.prototype.calculateCalories = function() {
    this.calories = this.items.reduce (function (acc, orderItem) {
      return acc + orderItem.getCalories();
  }, 0);
    return this.calories;
  };
  
  Order.prototype.calculatePrice = function() {
    this.price = this.items.reduce (function (acc, orderItem) {
     return acc + orderItem.getPrice();
    }, 0);
    return this.price;
  };

  Order.prototype.addItem = function(menuItem) {
    this.items.push(menuItem);
	this.calculateCalories();
	this.calculatePrice();
  };

  Order.prototype.deleteItem = function(menuItem) {
	var context=this;
	var delIndex;
    this.items.forEach (function (orderItem, index) {
		 if (orderItem.name==menuItem.name)
			 delIndex=index;
    });
	context.items.splice(delIndex, 1);
	this.calculateCalories();
	this.calculatePrice();
  };
  
  Order.prototype.numberOfItems = function (menuItem) {
    return this.items.reduce (function (number, orderItem) {
      return orderItem.name==menuItem.name ? number+1 : number;
    }, 0)
  };
  
  return Order;
})();