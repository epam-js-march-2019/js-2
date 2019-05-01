class Food {

	get calories() {
		return _calories;
	}

	get price() {
		return _price;
	}

	constructor(calories, price){
		_calories = calories;
		_price = price;
	}
}

// Hamburger
class Hamburger extends Food {

// todo: override price & calories based on stuffing

	get size() {
		return _size;
	}

	get stuffing() {
		return _stuffing;
	}

	constructor(size, stuffing){
		_size = size;
		_stuffing = stuffing;
	}
}

// Salad

class Salad extends Food {
	
// todo: override price & calories depending on weight

	get weight() {
		return _weight;
	}

	get type() {
		return _type;
	}

	constructor(weight, type){
		_weight = weight;
		_type = type;
	}
}

// Drink 

class Drink extends Food {
	
// tdo: override p&c

	get type() {
		return _type;
	}

	constructor(type){
		_type = type;
	}
}

// Stuffing 

class Stuffing extends Food {
	get flavor() {
		return _flavor;
	}
	constructor(price, calories, flavor){
		_flavor = flavor;
	}
}


class FoodFactory {
	makeFood(type) {};
}

class HamburgerFactory extends FoodFactory {
	makeFood(size, stuffing) {
let calories, price;
switch(size) {
	case "big"
	}
}
}
