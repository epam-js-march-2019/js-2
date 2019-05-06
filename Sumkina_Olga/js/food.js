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
