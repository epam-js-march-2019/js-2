/**
 * Класс, объекты которого описывают параметры гамбургера в меню.
 *
 * @constructor
 * @param type Размер
 * @param stuffing Начинка
 * @constructor
 */
function Hamburger(type, stuffing) {
    this._size = type;
    this._stuffing = stuffing;
}

Hamburger.prototype = Object.create(productInfo);
Hamburger.prototype.getSize = function () {
    return this._size.getName();
};
Hamburger.prototype.getStuffing = function () {
    return this._stuffing.getName();
};
