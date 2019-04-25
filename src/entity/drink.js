/**
 * Класс, объекты которого описывают напитки в меню.
 *
 * @param drink Тип напитка (MenuItem)
 * @constructor
 */
function Drink(drink) {
    this._drink = drink;
}

Drink.prototype = Object.create(ProductInfo.prototype);
Drink.prototype.constructor = Drink;
