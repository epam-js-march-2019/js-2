function FoodFactory();

FoodFactory.prototype.createFood = function(options){
	switch(options.type){
		case HAMBURGER: this.type = Hamburger;
		break;
		case SALAD: this.type = Salad;
		break;
		case DRINK: this.type = Drink;
		break;
		case STUFFING: this.type = Stuffing;
		break;
		default: console.error('Unknown food type: ' + options.type);
	}

	return new this.type(options);
}

var foodFactory = new FoodFactory();
var hamburger = foodFactory.createFood({type: 'hamburger', });


function Hamburger(option){
	this.size = 'big'
	this.stuffing = 'cheese'
}

FoodFactory.prototype.type = Hamburger;