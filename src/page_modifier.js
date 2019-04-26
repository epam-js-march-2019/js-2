const UNIT_OF_MEASUREMENT_UNIT = " шт.";
const COUNT_OF_CALORIES = "Колличество каллорий в заказе: ";
const PRICE = "Цена заказа (тугрики): ";
/**
 * Функция для добавления данных на страницу
 *
 * @param orderItem элемент для вставки на страницу
 */
function addOrderItemOnPage(orderItem) {
    let productDescription = "<p>" + orderItem.getDish().getName() + ": " +
        + orderItem.getNumber() + UNIT_OF_MEASUREMENT_UNIT +"</p>";
    let deleteButton = "<button class='btn btn-primary' onClick='deleteOrderItem(" + orderItem.getId() + ", event)'>Удалить</button>";

    let order = document.createElement('div');
    order.setAttribute("id", orderItem.getId());
    order.setAttribute("class", "my-style");
    order.innerHTML = productDescription + deleteButton;
    let orderItems = document.getElementById("order-items");
    orderItems.appendChild(order);
    _clearOrderInfo();
}
/**
 * Функция для обновления данных на страницу
 *
 * @param orderItem элемент для обновления
 */
function refreshOrderItemOnPage(orderItem) {
    let orderItemOnPage = document.getElementById(orderItem.getId());
    let regEx = new RegExp("\\d+"+UNIT_OF_MEASUREMENT_UNIT, "g");
    orderItemOnPage.innerHTML = orderItemOnPage.innerHTML.replace(regEx, orderItem.getNumber() + UNIT_OF_MEASUREMENT_UNIT);
    _clearOrderInfo();
}
/**
 * Функция для обновления данных на страницу
 *
 * @param orderItemId Id элемента для удаления
 */
function deleteOrderItemFromPage(orderItemId) {
    document.getElementById(orderItemId).remove();
    _clearOrderInfo();
}
/**
 * Функция для отображения стоимости заказа
 *
 * @param sum Стоимость заказа
 */
function showOrderPrice(sum) {
    let price = document.getElementById("price");
    if (price === null) {
        let sumPrice = document.createElement('h4');
        sumPrice.setAttribute("id", "price");
        sumPrice.innerText = PRICE + sum;
        let orderInfo = document.getElementById("info");
        orderInfo.appendChild(sumPrice);
    } else {
        price.innerText = price.innerText.replace(/\d+.*\d*/, sum);
    }
}
/**
 * Функция для отображения кол-ва калорий в заказе
 *
 * @param sum Кол-во калорий в заказе
 */
function showOrderCalories(sum) {
    let calories = document.getElementById("calories");
    if (calories === null) {
        let sumCalories = document.createElement('h4');
        sumCalories.setAttribute("id", "calories");
        sumCalories.innerText = COUNT_OF_CALORIES + sum;
        let orderInfo = document.getElementById("info");
        orderInfo.appendChild(sumCalories);
    } else {
        calories.innerText = calories.innerText.replace(/\d+.*\d*/, sum);
    }
}
/**
 * Функция для очищения информации о заказе при каких-либо изменениях в нем.
 *
 * @private
 */
function _clearOrderInfo() {
    let price = document.getElementById("price");
    if (price !== null) {
        price.remove()
    }
    let calories = document.getElementById("calories");
    if (calories !== null) {
        calories.remove();
    }
}

