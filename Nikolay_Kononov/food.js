function FoodFactory(){}

function Food(args) {
    this.price = args.price;
    this.calories = args.calories;
    this.name = args.name;
}

FoodFactory.prototype.addDrink = function(args) {
    switch (args){
        case 'cola': 
            var newDrink = new Drink(cola);
            break;
        case 'coffee':
            newDrink = new Drink(coffee);
            break;
    }

    return newDrink;
}

Food.prototype.getPrice = function(){
    return this.price;
};

Food.prototype.getCalories = function(){
    return this.calories;
};
