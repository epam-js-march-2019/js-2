/**
 * Класс, объекты которого описывают заказы.
 *
 * @constructor
 */
function Order() {
    this._newItemId = 1;
    this._orderItems = [];
}

// создаем 1 объект с которым работаем
const order = new Order();

/**
 * Функция для добавления позиций меню в заказ
 *
 * @param dish Блюдо из меню
 */
Order.prototype.addOrderItem = function (dish) {
    let orderItem;
    let index = -1;
    for (let i = 0; i < this._orderItems.length; i++) {
        if (this._orderItems[i].getDish().getName() === dish.getName()) {
            index = i;
        }
    }
    if (index === -1) {
        orderItem = new OrderItem(this._newItemId++, dish, 1);
        this._orderItems.push(orderItem);
        addOrderItemOnPage(orderItem, UNIT_OF_MEASUREMENT_UNIT);
    } else {
        orderItem = this._orderItems[index];
        orderItem.increaseNumber();
        this._orderItems.splice(index, 1, orderItem);
        refreshOrderItemOnPage(orderItem);
    }
};
/**
 * Функция для удаления или обновления позиций меню в заказе
 *
 * @param orderItemId Id элемента на странице
 */
Order.prototype.deleteOrDecreaseNumberOfItems = function (orderItemId) {
    let orderItem;
    let index = -1;
    for (let i = 0; i < this._orderItems.length; i++) {
        if (this._orderItems[i].getId() === orderItemId) {
            index = i;
        }
    }
    if (index === -1) {
        alert("Can't find the item.");
        return;
    }
    orderItem = this._orderItems[index];
    if (orderItem.getNumber() <= 1){
        this._orderItems.splice(index, 1);
        deleteOrderItemFromPage(orderItemId);
    } else {
        orderItem.decreaseNumber();
        this._orderItems.splice(index, 1, orderItem);
        refreshOrderItemOnPage(orderItem);
    }
};
/**
 * Функция для получения стоимости заказа
 *
 */
Order.prototype.getSumPrice = function() {
    let sum = 0;
    this._orderItems.forEach(item => sum = sum + (item.getDish().getPrice() * item.getNumber()));
    showOrderPrice(sum);
};
/**
 * Функция для получения кол-ва калорий в заказе
 *
 */
Order.prototype.getSumCalories = function() {
    let sum = 0;
    this._orderItems.forEach(item => sum += (item.getDish().getCalories() * item.getNumber()));
    // This is for rounding number of calories
    showOrderCalories(Math.round(sum ));
};
