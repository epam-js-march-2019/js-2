/* ---- Make generic Product construction function */
function Product(type) {
	this.type = type;
	this.guid = type;
}
Product.prototype.getPrice = function () {
	return this.typeToPrice[this.type];
};
Product.prototype.getCalories = function () {
	return this.typeToCalories[this.type];
};
Product.prototype.getGuid = function () {
	return this.guid;
};
/* Product constructor function complete*/

/* ---- Make Hamburger construction function */
function Hamburger(type, stuffing) {
	/* Call parent initialization*/
	Product.call(this, type);
	/* Call self initialization */
	this.stuffing = stuffing;
	this.name = "Hamburger";
	/* Add stuffing to guid to make differently stuffed hamburgers
	be distinguishable from each other (used in cart rendering) */
	for (item in stuffing) {
		stuffing[item] && (this.guid += `-${item}`);
	}
}

/*
* Make child prototype inherit from parent prototype
* Set up constructor property of new prototype
 */
Hamburger.prototype = Object.create(Product.prototype);
Object.defineProperty(Hamburger.prototype, 'constructor', {
	value: Hamburger,
	writable: true,
	enumerable: false,
	configurable: true
});

/* Add immutable 'class constants' (damn, JS is so verbose...) */
Object.defineProperty(Hamburger.prototype, 'typeToCalories', {
	enumerable: true,
	get: function () {return {small: 20, big: 40}},
});
Object.defineProperty(Hamburger.prototype, 'typeToPrice', {
	enumerable: true,
	get: function () {return {small: 50, big: 100}},
});
Object.defineProperty(Hamburger.prototype, 'stuffingToCalories', {
	enumerable: true,
	get: function () {return {cheese: 20, lettuce: 5, potatoes: 10}},
});
Object.defineProperty(Hamburger.prototype, 'stuffingToPrice', {
	enumerable: true,
	get: function () {return {cheese: 10, lettuce: 20, potatoes: 15}},
});

/* Override getPrice and getCalories with enhanced functionality*/
Hamburger.prototype.getPrice = function() {
	const fromType = Product.prototype.getPrice.call(this);
	let fromStuffing = 0;
	for (item in this.stuffing) {
		this.stuffing[item] && (fromStuffing += this.stuffingToPrice[item]);
	}
	return fromType + fromStuffing;
};
Hamburger.prototype.getCalories = function() {
	const fromType = Product.prototype.getCalories.call(this);
	let fromStuffing = 0;
	for (item in this.stuffing) {
		this.stuffing[item] && (fromStuffing += this.stuffingToCalories[item]);
	}
	return fromType + fromStuffing;
};
/* Hamburger constructor function complete*/

/* ---- Make Salad constructor function */

function Salad(type) {
	Product.call(this, type);
	this.name = "Salad";
}
/* Prototype */
Salad.prototype = Object.create(Product.prototype);
Object.defineProperty(Salad.prototype, 'constructor', {
	value: Salad,
	writable: true,
	enumerable: false,
	configurable: true
});
/* Constants */
Object.defineProperty(Salad.prototype, 'typeToCalories', {
	enumerable: true,
	get: function () {return {caesar: .2, russianSalad: .8}},
});
Object.defineProperty(Salad.prototype, 'typeToPrice', {
	enumerable: true,
	get: function () {return {caesar: 1, russianSalad: .5}},
});
/* Salad constructor function complete*/

/* ---- Make Drink constructor function */

function Drink(type) {
	Product.call(this, type);
	this.name = "Drink";
}
/* Prototype */
Drink.prototype = Object.create(Product.prototype);
Object.defineProperty(Drink.prototype, 'constructor', {
	value: Drink,
	writable: true,
	enumerable: false,
	configurable: true
});
/* Constants */
Object.defineProperty(Drink.prototype, 'typeToCalories', {
	enumerable: true,
	get: function () {return {cola: 40, coffee: 20}},
});
Object.defineProperty(Drink.prototype, 'typeToPrice', {
	enumerable: true,
	get: function () {return {cola: 50, coffee: 80}},
});
/* Drink constructor function complete*/