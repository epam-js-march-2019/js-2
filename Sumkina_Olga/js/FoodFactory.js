function FoodFactory(){};

FoodFactory.prototype.createFood = function(options){

	switch(options.type){
		case Hamburger.FOOD_TYPE: this.type = Hamburger; 
		break;
		case Salad.FOOD_TYPE: this.type = Salad;
		break;
		case Drink.FOOD_TYPE: this.type = Drink;
		break;
		default: console.error('Unknown food type: ' + options.type);
	}

	return new this.type(options); 
}

