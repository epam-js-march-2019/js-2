'use strict';

import { MenuItem } from "./menuItem.js";

function Hamburger(typeItem, typeStuffing, countStuffing) {
	MenuItem.call(this);

	this.typeItem = typeItem;
	this.typeStuffing = typeStuffing;

	this.size = new MenuItem(typeItem.price, typeItem.calories);
	this.stuffing = new MenuItem(typeStuffing.price, typeStuffing.calories);
	this.price = typeItem.price + (typeStuffing.price)*countStuffing;
	this.calories = typeItem.calories + (typeStuffing.calories)*countStuffing;
};

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getTypeItem = function() {
	return this.typeItem;
};

Hamburger.prototype.getTypeStuffing = function() {
	return this.typeStuffing;
};

Hamburger.prototype.getSize = function() {
	return this.size;
};

Hamburger.prototype.getStuffing = function() {
	return this.stuffing;
};

export { 
	Hamburger
};