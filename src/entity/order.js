/**
 * Класс, объекты которого описывают заказы.
 *
 * @constructor
 */
function Order() {
    this._newItemId = 1;
    this._orderItems = [];
}

const order = new Order();
const UNIT_OF_MEASUREMENT_UNIT = " шт.";

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
        this._addOrderItemOnPage(orderItem, UNIT_OF_MEASUREMENT_UNIT);
    } else {
        orderItem = this._orderItems[index];
        orderItem.increaseNumber();
        this._orderItems.splice(index, 1, orderItem);
        this._refreshOrderItemOnPage(orderItem);
    }
};
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
        this._deleteOrderItemFromPage(orderItemId);
    } else {
        orderItem.decreaseNumber();
        this._orderItems.splice(index, 1, orderItem);
        this._refreshOrderItemOnPage(orderItem);
    }
    return orderItem;
};

/**
 * Функция для добавления данных на странице
 *
 * @param orderItem элемент для вставки на страницу
 * @private
 */
Order.prototype._addOrderItemOnPage = function(orderItem) {
    let productDescription = "<p>" + orderItem.getDish().getName() + ": " +
        + orderItem.getNumber() + UNIT_OF_MEASUREMENT_UNIT +"</p>";
    let deleteButton = "<button onClick='deleteOrderItem(" + orderItem.getId() + ", event)'>Удалить</button>";

    let order = document.createElement('div');
    order.setAttribute("id", orderItem.getId());
    order.innerHTML = productDescription + deleteButton;
    let orders = document.getElementById("orders");
    orders.appendChild(order);
};
/**
 * Функция для обновления данных на странице
 *
 * @param orderItem элемент для обновления
 * @private
 */
Order.prototype._refreshOrderItemOnPage = function(orderItem) {
    let orderItemOnPage = document.getElementById(orderItem.getId());
    let regEx = new RegExp("\\d+"+UNIT_OF_MEASUREMENT_UNIT, "g");
    orderItemOnPage.innerHTML = orderItemOnPage.innerHTML.replace(regEx, orderItem.getNumber() + UNIT_OF_MEASUREMENT_UNIT);
};
/**
 * Функция для обновления данных на странице
 *
 * @private
 * @param orderItemId id элемента для удаления
 */
Order.prototype._deleteOrderItemFromPage = function(orderItemId) {
    document.getElementById(orderItemId).remove();
};
