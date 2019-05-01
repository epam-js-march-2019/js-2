class Food {

	get calories() {
		return _calories;
	}

	get price() {
		return _price;
	}

	constructor(options){
		_calories = options.calories;
		_price = options.price;
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

	constructor(options){
		_size = options.size;
		_stuffing = options.stuffing;
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

	constructor(options){
		_weight = options.weight;
		_type = options.type;
	}
}

// Drink 

class Drink extends Food {
	
// tdo: override p&c

	get type() {
		return _type;
	}

	constructor(options){
		_type = options.type;
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


