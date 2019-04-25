/**
 * Класс, объекты которого описывают элемент в заказе.
 *
 * @constructor
 * @param id уникальный id для манипуляций с элементом
 * @param dish блюдо/напиток из меню
 * @param number колличество данных элементов
 */
function OrderItem(id, dish, number) {
    this._id = id;
    this._dish = dish;
    this._number = number;
}

OrderItem.prototype.increaseNumber = function () {
    this._number = this._number + 1;
};
OrderItem.prototype.decreaseNumber = function () {
    this._number = this._number - 1;
};
OrderItem.prototype.getId = function () {
    return this._id;
};
OrderItem.prototype.getDish = function () {
    return this._dish;
};
OrderItem.prototype.getNumber = function () {
    return this._number;
};
