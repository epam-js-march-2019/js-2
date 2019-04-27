/**
 * Класс, позволяющий узнать цену и калорийность блюда из меню.
 *
 * @constructor
 */
function ProductInfo() {
}

ProductInfo.prototype.getPrice = function () {
    let price = 0;
    Object.values(this).forEach(field =>
        price += field instanceof MenuItem ? field.getPrice() : 0);
    return price;
};
ProductInfo.prototype.getCalories = function () {
    let calories = 0;
    Object.values(this).forEach(field =>
        calories += field instanceof MenuItem ? field.getCalories() : 0);
    return calories;
};
ProductInfo.prototype.getName = function () {
    let arr = [];
    Object.values(this).forEach(field => {
        if (field instanceof MenuItem) {
            arr.push(field.getName());
        }
    });
    return arr.join(" ");
};
