
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
