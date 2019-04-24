function Salad(type) {
    this.name = "Salad";
    this.type = type;
    switch (type) {
        case "cesar":
            this.price = 100;
            this.kcal = 20;
            break;
        case "olive":
            this.price = 50;
            this.kcal = 80;
            break;
    }
    Food.call(this,type);
};

Salad.prototype = Object.create(Food.prototype);
Salad.prototype.constructor = Salad;

