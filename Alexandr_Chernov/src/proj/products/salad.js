'use strict';

import { MenuItem } from "../menuItem.js";

function Salad(type, weight) {
	MenuItem.call(this);
	this.type = type;
	this.weight = weight;

		// Получение стоимости и калорийности пункта меню с учётом веса
	this.price = (type.price / 100) * weight;
	this.calories = (type.calories / 100) * weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getType = function() {
	return this.type;
};

Salad.prototype.getWeight = function() {
	return this.weight;
};

export { 
	Salad
};