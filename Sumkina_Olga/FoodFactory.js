function FoodFactory(){};


/*
options = {
	type: "hamburger", // typer ~ string
	quantity: 5,
	stuffing: "stafillocock"
}
*/
FoodFactory.prototype.createFood = function(options){
	//_type = undefined;
	switch(options.type){
		case Hamburger.FOOD_TYPE: this.type = Hamburger; // type ~ class ~ constructor ~ function
		break;
		case SALAD: this.type = Salad;
		break;
		case DRINK: this.type = Drink;
		break;
		default: console.error('Unknown food type: ' + options.type);
	}

	return new this.type(options);
}

var foodFactory = new FoodFactory();
var hamburger = foodFactory.createFood({type: Hamburger.FOOD_TYPE, 
	size: Hamburger.SIZE_SMALL, 
	stuffing: Hamburger.STUFFING_CHEESE});
console.log(hamburger);

var large_hamburger = foodFactory.createFood({type: Hamburger.FOOD_TYPE,
	size: Hamburger.SIZE_LARGE,
	stuffing: Hamburger.STUFFING_POTATO});
console.log(large_hamburger);