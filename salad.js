function Salad(type,gramm){
    this.name = "Salad";
    this.type = type;
    this.gramm = gramm;
    switch (type) {
        case "caesar":
        this.price = 100;
        this.kcal = 20;
        break;
        case "olive":
            this.price = 50;
            this.kcal = 80;
            break;

    };
    this.price *= (gramm/100);
    this.kcal *= (gramm/100);
    Food.call(this,type);
}
Salad.prototype.constructor = Salad;
Salad.prototype = Object.create(Food.prototype);
