function Food(){}

Food.getCalories = function(){
	return 'calories';
}

Food.getPrice = function(){
	return 'price';
}

Food.getAmount = function(amount){
	return amount;
}

Hamburger = Object.create(Food);

Drink = Object.create(Food);

Salad = Object.create(Food);


Hamburger.getSize = function(size){
	return size;
}

Hamburger.getStuffing = function(stuffing){
	return stuffing;
}

Salad.getType = function(type){
	return type;
}

Salad.getPortion = function(portion){
	return portion;
}

Drink.getType = function(type){
	return type;
}