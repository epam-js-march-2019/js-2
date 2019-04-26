/**
 * Функция - слушатель, для добавления гамбургера в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addHamburger(form, event) {
    event.preventDefault();
    let size = form.elements['size'].value;
    let stuff = form.elements['stuff'].value;

    switch (size) {
        case 'small':
            size = Hamburger.SIZE_SMALL;
            break;
        case 'large':
            size = Hamburger.SIZE_LARGE;
            break;
        default:
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
            stuff = null;
    }

    let hamburger = new Hamburger(size, stuff);
    order.addOrderItem(hamburger);
}
/**
 * Функция - слушатель, для добавления салата в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addSalad(form, event) {
    event.preventDefault();
    let salad = form.elements['salad'].value;
    let weight = form.elements['weight'].value;

    if (weight === undefined || weight < 1) {
        alert("Please type the valid weight before salad ordering.");
        return;
    }
    switch (salad) {
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

    order.addOrderItem(salad, weight);
}
/**
 * Функция - слушатель, для добавления напитка в заказ
 *
 * @param form Данные с формы UI
 * @param event Событие
 */
function addDrink(form, event) {
    event.preventDefault();
    let drink = form.elements['drink'].value;

    switch (drink) {
        case 'coffee':
            drink = new Drink(Drink.COFFEE);
            break;
        case 'cola':
            drink = new Drink(Drink.COLA);
            break;
        default:
            return;
    }

    order.addOrderItem(drink);
}
/**
 * Функция - слушатель, для удаления позиции из заказа
 *
 * @param orderItemId id элемента, который нужно удалить
 * @param event Событие
 */
function deleteOrderItem(orderItemId, event) {
    event.preventDefault();
    order.deleteOrDecreaseNumberOfItems(orderItemId);
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
    order.getSumPrice();
}
/**
 * Функция - слушатель, для получения кол-ва коллорий в заказе
 *
 */
function getOrderCalories() {
    order.getSumCalories();
}
/**
 * Функция - слушатель, для "оплаты" заказа
 *
 */
function closeOrder(){
    let menu = document.getElementById("menu");
    menu.classList.add("disabledDiv");
    let orderItems = document.getElementById("order-items");
    orderItems.classList.add("disabledDiv");
    let closeOrder = document.getElementById("closeOrder");
    closeOrder.classList.add("disabledDiv");
}
