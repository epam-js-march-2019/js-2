/**
 * Класс, позволяющий узнать цену и калорийность блюда
 *
 * @constructor
 */
function ProductInfo() {
}

ProductInfo.prototype.getPrice = function () {
    let price = 0;
    for (let field in this) {
        if (this[field] instanceof MenuItem) {
            price += this[field].getPrice();
        }
    }
    return price;
};
ProductInfo.prototype.getCalories = function () {
    let calories = 0;
    for (let field in this) {
        if (this[field] instanceof MenuItem) {
            calories += this[field].getCalories();
        }
    }
    return calories;
};
ProductInfo.prototype.getName = function () {
    let arr = [];
    for (let field in this) {
        if (this[field] instanceof MenuItem) {
            arr.push(this[field].getName());
        }
    }
    return arr.join(" ");
};
