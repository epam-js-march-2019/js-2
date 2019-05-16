'use strict';

import { MenuItem } from "./menuItem.js";

function Drink(type, count) {
	MenuItem.call(this);
	
	this.type = type;
	this.price = type.price * count;
	this.calories = type.calories * count;
};

Drink.prototype = Object.create(MenuItem.prototype);
Drink.prototype.constructor = Drink;

Drink.prototype.getType = function() {
	return this.type;
};

export { 
	Drink
};