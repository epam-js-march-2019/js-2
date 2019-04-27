/**
 * Маркерный объект, позволяющий при наследовании узнать название, цену и калорийность блюда из меню.
 *
 */
const productInfo = (function ProductInfo() {
    let getPrice = function () {
        let price = 0;
        Object.values(this).forEach(field =>
            price += field instanceof MenuItem ? field.getPrice() : 0);
        return price;
    };
    let getCalories = function () {
        let calories = 0;
        Object.values(this).forEach(field =>
            calories += field instanceof MenuItem ? field.getCalories() : 0);
        return calories;
    };
    let getName = function () {
        let arr = [];
        Object.values(this).forEach(field => {
            if (field instanceof MenuItem) {
                arr.push(field.getName());
            }
        });
        return arr.join(" ");
    };
    return {
        getPrice,
        getCalories,
        getName
    }
})();



