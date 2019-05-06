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