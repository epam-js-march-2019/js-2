class Food {

	get calories() {
		return this._calories;
	}

	get price() {
		return this._price;
	}

	get name() {
		var name = this.buildName();
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return name;
	}

	constructor(options){
		this._calories = 0;
		this._price = 0;
	}

	increment(price, calories){
		this._price += Math.floor(price);
		this._calories += Math.ceil(calories);
	}

	buildName() {
		return "food";
	}
}

class Hamburger extends Food {

	static FOOD_TYPE = 'hamburger';
	static SIZE_SMALL = 'small';
	static SIZE_LARGE = 'large';
	static STUFFING_CHEESE = 'cheese';
	static STUFFING_SALAD = 'salad';
	static STUFFING_POTATO = 'potato';

	get size() {
		return this._size;
	}

	get stuffing() {
		return this._stuffing;
	}

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

	buildName() {
		return `${this.size} ${this.stuffing} hamburger`;
	}
}

class Salad extends Food {
	static FOOD_TYPE = "salad";
	static CEASAR = "ceasar";
	static RUSSIAN_SALAD = "russian";
	static SERVING_WEIGHT = 100; // grams per serving

	get weight() {
		return this._weight;
	}

	get type() {
		return this._type;
	}

	constructor(options){
		super(options);
		const servings = options.weight / Salad.SERVING_WEIGHT;
		switch(options.saladType){
			case Salad.CEASAR: this.increment(100 * servings, 20 * servings);
			break;
			case Salad.RUSSIAN_SALAD: this.increment(50 * servings, 80 * servings);
			break;
			default: console.error("Unknown type of salad " + options.saladType);
		}

		this._weight = options.weight;
		this._type = options.saladType;
	}

	buildName() {
		return `${this.type} salad (${this.weight}g)`
	}
}

class Drink extends Food {
	static FOOD_TYPE = "drink";
	static COFFEE = "coffee";
	static COLA = "cola";

	get type() {
		return this._type;
	}

	constructor(options){

		super(options);
		switch (options.drinkType){
			case Drink.COFFEE: this.increment(50, 40);
			break;
			case Drink.COLA: this.increment(80, 20);
			break;
			default: console.error("Unknown type of drink " + options.drinkType);
		}

		this._type = options.drinkType;
	}

	buildName() {
		return `${this.type}`;
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


