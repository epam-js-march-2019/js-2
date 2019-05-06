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