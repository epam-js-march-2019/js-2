'use strict';

function MenuItem(price, calories) {
	this.price = price;
	this.calories = calories;
};

MenuItem.prototype.getPrice = function() {
	return this.price;
};

MenuItem.prototype.getCalories = function() {
	return this.calories;
};

export { 
	MenuItem
};