// создаем 1 объект с которым работаем
const order = new Order();

/**
 * Функция - слушатель, для добавления гамбургера в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addHamburger(form, event) {
    event.preventDefault();
    let size = _getValueFromForm(form,'size');
    let stuff = _getValueFromForm(form,'stuff');
    let hamburger;

    switch (size) {
        case 'small':
            size = Hamburger.SIZE_SMALL;
            break;
        case 'large':
            size = Hamburger.SIZE_LARGE;
            break;
        default:
            alert("Please choose hamburger size.");
            return;
    }

    switch (stuff) {
        case 'cheese':
            stuff = Hamburger.STUFFING_CHEESE;
            break;
        case 'salad':
            stuff = Hamburger.STUFFING_SALAD;
            break;
        case 'potato':
            stuff = Hamburger.STUFFING_POTATO;
            break;
        default:
            stuff = undefined;
    }

    hamburger = new Hamburger(size, stuff);
    let orderItem = order.addOrderItem(hamburger);
    _addOrderItemOnPage(orderItem);
}
/**
 * Функция - слушатель, для добавления салата в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addSalad(form, event) {
    event.preventDefault();
    let saladType = _getValueFromForm(form,'salad');
    let weight = form.elements['weight'].value;
    if (weight === undefined || weight < 1) {
        alert("Please type a valid weight before salad ordering.");
        return;
    }

    let salad;
    switch (saladType) {
        case 'caesar':
            salad = new Salad(Salad.CAESAR, weight);
            break;
        case 'russian_salad':
            salad = new Salad(Salad.RUSSIAN_SALAD, weight);
            break;
        default:
            alert("Please choose salad type.");
            return;
    }

    let orderItem = order.addOrderItem(salad);
    _addOrderItemOnPage(orderItem);

}
/**
 * Функция - слушатель, для добавления напитка в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addDrink(form, event) {
    event.preventDefault();
    let drinkType = _getValueFromForm(form,'drink');

    let drink;
    switch (drinkType) {
        case 'coffee':
            drink = new Drink(Drink.COFFEE);
            break;
        case 'cola':
            drink = new Drink(Drink.COLA);
            break;
        default:
            alert("Please choose a drink.");
            return;
    }

    let orderItem = order.addOrderItem(drink);
    _addOrderItemOnPage(orderItem);
}
/**
 * Функция - слушатель, для удаления позиции из заказа
 *
 * @param orderItemId id элемента, который нужно удалить
 * @param event Событие
 */
function deleteOneOrderItemById(orderItemId, event) {
    event.preventDefault();
    let orderItem = order.deleteOneOrderItemById(orderItemId);
    if (orderItem === undefined) {
        alert("Can't find the item.");
    } else if (orderItem.getNumber() > 0) {
        refreshOrderItemOnPage(orderItem);
    } else {
        deleteOrderItemFromPage(orderItemId);
    }
}
/**
 * Функция - слушатель, для проверки валидности формы, критерий - required radio-buttons are checked.
 *
 * @param form Данные с формы
 * @param event Событие
 */
function checkFormIsValid(form, event){
    event.preventDefault();
    let requiredFields = Array.from(form.querySelectorAll('input[type="radio"][required]'));
    let values = [];
    for (let i = 0; i < requiredFields.length; i++) {
        let isNewValue = true;
        for (let j = 0; j < values.length; j++){
            if (values[j].name === requiredFields[i].name) {
                values[j].checked = values[j].checked ? true : requiredFields[i].checked;
                isNewValue = false;
            }
        }
        if (isNewValue) {
            values.push({name: requiredFields[i].name, checked: requiredFields[i].checked});
        }
    }

    if (values.every(el => el.checked === true)) {
        form.elements['submit'].disabled = false;
    }
}
/**
 * Функция - слушатель, для получения цены заказа
 *
 */
function getOrderPrice() {
    let orderPrice = order.getOrderPrice();
    showOrderPrice(orderPrice);
}
/**
 * Функция - слушатель, для получения кол-ва коллорий в заказе
 *
 */
function getOrderCalories() {
    let orderCalories = order.getOrderCalories();
    showOrderCalories(orderCalories);
}
/**
 * Функция - слушатель, для "оплаты" заказа
 *
 */
function payOrder(){
    // Место для логики оплаты
    closeOrder();
}
/**
 * Вспомогательная функция для корректного отображения позиции заказа
 *
 * @param orderItem Элемент описывающий позицию заказа
 * @private
 */
function _addOrderItemOnPage(orderItem) {
    if (orderItem.getNumber() === 1) {
        addOrderItemOnPage(orderItem, UNIT_OF_MEASUREMENT_UNIT);
    } else {
        refreshOrderItemOnPage(orderItem);
    }
}
/**
 * Вспомогательная функция для получения значения checked элемента с формы
 *
 * @param form Данные с формы
 * @param groupName Название группы элементов
 * @returns {string} Значение checked элемента
 * @private
 */
function _getValueFromForm(form, groupName) {
    let value = undefined;
    // For supporting Edge browser we use this way to get the value.
    Array.from(form.elements[groupName]).forEach(item => {
        if (item.checked) {
            value = item.value;
        }
    });
    return value;
}
