function FoodFactory(){};

FoodFactory.prototype.createFood = function(options){
	//_type = undefined;
	switch(options.type){
		case Hamburger.FOOD_TYPE: this.type = Hamburger; // type ~ class ~ constructor ~ function
		break;
		case Salad.FOOD_TYPE: this.type = Salad;
		break;
		case Drink.FOOD_TYPE: this.type = Drink;
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

var russianSalad = foodFactory.createFood({type: Salad.FOOD_TYPE, 
	weight: 150, 
	saladType: Salad.RUSSIAN_SALAD});
console.log(russianSalad);

var coffee = foodFactory.createFood({type: Drink.FOOD_TYPE,
	drinkType: Drink.COFFEE});
console.log(coffee);

var cola = foodFactory.createFood({type: Drink.FOOD_TYPE,
	drinkType: Drink.COLA});
console.log(cola);