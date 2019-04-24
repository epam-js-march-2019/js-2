function Salad(type, salad_count) {
    this.name = "Salad";
    this.type = type;
    this.salad_count = salad_count;
    switch (type) {
        case "cesar":
            this.price = 1 * salad_count;
            this.kcal = Math.round(0.2 * salad_count);
            break;
        case "olive":
            this.price = 0.5 * salad_count;
            this.kcal = Math.round(0.8 * salad_count);
            break;
    }
    this.price.toFixed(2);
    Food.call(this,type);
};

Salad.prototype = Object.create(Food.prototype);
Salad.prototype.constructor = Salad;

