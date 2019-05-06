function AllFood(props) {

    this.price = props.price;
    this.calories = props.calories;
    this.name = props.name;

}


AllFood.prototype.getPrice = function() {

    return this.price;

}


AllFood.prototype.getCalories = function() {

    return this.calories;

}


AllFood.prototype.getName = function() {

    return this.name;

}