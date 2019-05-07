'use strict';

import { MenuItem } from "../menuItem.js";

function Hamburger(size, stuffing) {
	MenuItem.call(this);

	this.size = new MenuItem(size.price, size.calories);
	this.stuffing = new MenuItem(stuffing.price, stuffing.calories);
	this.price = size.price + stuffing.price;
	this.calories = size.calories + stuffing.calories;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getSize = function() {
	return this.size;
};

Hamburger.prototype.getStuffing = function() {
	return this.stuffing;
};

export { 
	Hamburger
};