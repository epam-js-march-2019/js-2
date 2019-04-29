/**
 * Класс, объекты которого описывают заказы.
 *
 * @constructor
 */
function Order() {
    this._newItemId = 1;
    this.orderItems = [];
}
Order.prototype.getLengthOfOrderItems = function () {
    return this.orderItems.length;
};
/**
 * Функция для добавления позиций меню в заказ
 *
 * @param dish Блюдо из меню
 * @return {OrderItem} Сформированная позиция заказа
 */
Order.prototype.addOrderItem = function (dish) {
    let orderItem;
    let index = -1;
    for (let i = 0; i < this.orderItems.length; i++) {
        if (this.orderItems[i].getDish().getName() === dish.getName()) {
            index = i;
        }
    }
    if (index === -1) {
        orderItem = new OrderItem(this._newItemId++, dish, 1);
        this.orderItems.push(orderItem);
    } else {
        orderItem = this.orderItems[index];
        orderItem.increaseNumber();
        this.orderItems.splice(index, 1, orderItem);
    }
    return orderItem;
};
/**
 * Функция для удаления или обновления позиций меню в заказе
 *
 * @param orderItemId Id элемента на странице
 * @return {OrderItem} Элемент orderItem из списка заказа или undefined, если нет такого элемента
 */
Order.prototype.deleteOneOrderItemById = function (orderItemId) {
    let orderItem;
    let index = -1;
    for (let i = 0; i < this.orderItems.length; i++) {
        if (this.orderItems[i].getId() === orderItemId) {
            index = i;
        }
    }
    if (index === -1) {
        return undefined;
    }
    orderItem = this.orderItems[index];
    orderItem.decreaseNumber();
    if (orderItem.getNumber() > 0){
        this.orderItems.splice(index, 1, orderItem);
    } else {
        this.orderItems.splice(index, 1);
    }
    return orderItem;
};
/**
 * Функция для получения стоимости заказа
 *
 * @return {number} Сумма тугриков всех пунктов заказа
 */
Order.prototype.getOrderPrice = function() {
    let sum = 0;
    this.orderItems.forEach(item => sum = sum + (item.getDish().getPrice() * item.getNumber()));
    return sum;
};
/**
 * Функция для получения кол-ва калорий в заказе
 *
 * @return {number} Общее колличество каллорий всех пунктов заказа
 */
Order.prototype.getOrderCalories = function() {
    let sum = 0;
    this.orderItems.forEach(item => sum += (item.getDish().getCalories() * item.getNumber()));
    // This is for rounding number of calories
    return (Math.round(sum));
};
