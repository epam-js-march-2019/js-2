/**
 * Класс, объекты которого описывают пункты меню.
 *
 * @param name Наименование блюда
 * @param price Цена блюда
 * @param calories Количество калорий
 */
function MenuItem(name, price, calories) {
    this._name = name;
    this._price = price;
    this._calories = calories;
}

MenuItem.prototype.getName = function () {
    return this._name;
};
MenuItem.prototype.getPrice = function () {
    return this._price;
};
MenuItem.prototype.getCalories = function () {
    return this._calories;
};

/* Меню */
Hamburger.SIZE_SMALL = new MenuItem("Гамбургер маленький", 50, 20);
Hamburger.SIZE_LARGE = new MenuItem("Гамбургер большой", 100, 40);
Hamburger.STUFFING_CHEESE = new MenuItem("с сыром", 10, 20);
Hamburger.STUFFING_SALAD = new MenuItem("с салатом", 20, 25);
Hamburger.STUFFING_POTATO = new MenuItem("с картошкой", 15, 10);
Salad.RUSSIAN_SALAD = new MenuItem("Оливье", 100, 20);
Salad.CAESAR = new MenuItem("Цезарь", 50, 80);
Drink.COLA = new MenuItem("Кола", 50, 40);
Drink.COFFEE = new MenuItem("Кофе", 80, 20);
