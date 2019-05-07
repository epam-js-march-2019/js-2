function Salad(args, gramms) {
    Food.call(this, args);
    this.gramms = gramms;
}

caesar = {
    name: "Caesar",
    price: 100,
    calories: 20
};

olivie ={
    name: "Olivie",
    price: 50,
    calories: 80
};

Salad.prototype.getPrice = function() {
    return this.price / 100 * this.gramms;
};

Salad.prototype.getCalories = function() {
    return this.calories / 100 * this.gramms;
};

Salad.prototype.getName= function() {
    return this.name.concat(" ", this.gramms);
}
