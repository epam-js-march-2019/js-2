class Food {

	get calories() {
		return this._calories;
	}

	get price() {
		return this._price;
	}

	constructor(options){

		console.log("food: ");
		console.log(options);
		this._calories = 0;
		this._price = 0;
	}

	increment(price, calories){
		this._price += price;
		this._calories += calories;
	}
}

// Hamburger
class Hamburger extends Food {

	static FOOD_TYPE = 'Hamburger';
	static SIZE_SMALL = 'small';
	static SIZE_LARGE = 'large';
	static STUFFING_CHEESE = 'cheese';
	static STUFFING_SALAD = 'salad';
	static STUFFING_POTATO = 'potato';


// todo: override price & calories based on stuffing

get size() {
	return this._size;
}

get stuffing() {
	return this._stuffing;
}

// - маленький (+50 тугриков, +20 калорий)
// - большой (+100 тугриков, +40 калорий)

// - сыром (+10 тугриков, +20 калорий)
// - салатом (+20 тугриков, +5 калорий)
// - картофелем (+15 тугриков, +10 калорий)

constructor(options){
	super(options);
	switch(options.size) {
		case Hamburger.SIZE_SMALL: this.increment(50, 20);
		break;
		case Hamburger.SIZE_LARGE: this.increment(100, 40);
		break;
		default:
		console.error("Unknown size: " + options.size);
	}

	switch(options.stuffing) {
		case Hamburger.STUFFING_CHEESE: this.increment(10, 20);
		break;
		case Hamburger.STUFFING_POTATO: this.increment(15, 10);
		break;
		case Hamburger.STUFFING_SALAD: this.increment(20, 5);
		break;
		default:
		console.error("Unknown stuffing " + options.stuffing);
	}

	this._size = options.size;
	this._stuffing = options.stuffing;
}
}

// Salad

class Salad extends Food {
	static FOOD_TYPE = "Salad";
	static CEASAR = "Ceasar";
	static RUSSIAN_SALAD = "Russian salad";

	
// todo: override price & calories depending on weight

get weight() {
	return this._weight;
}

get type() {
	return this._type;
}

constructor(options){

	super(options);
	switch(options.typeSalad){
		case Salad.CEASAR: this.increment(100, 20);
		break;
		case Salad.RUSSIAN_SALAD: this.increment(50, 80);
		break;
		default: console.error("Unknown type of salad " + options.typeSalad);
	}

	this._weight = options.weight;
	this._type = options.typeSalad;

}
}

// Drink 

class Drink extends Food {
	static FOOD_TYPE = "Drink";
	static COFFEE = "Coffee";
	static COLA = "Cola";
// tdo: override p&c

get type() {
	return this._type;
}

constructor(options){

	super(options);
	switch (options.typeDrink){
		case Drink.COFFEE: this.increment(50, 40);
		break;
		case Drink.COLA: this.increment(80, 20);
		break;
		default: console.error("Unknown type of drink " + options.typeDrink);
	}

	this._type = options.typeDrink;
}
}

// Stuffing 

class Stuffing extends Food {
	get flavor() {
		return _flavor;
	}
	constructor(options){
		_flavor = options.flavor;
	}
}


