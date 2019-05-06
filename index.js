
var orderList = document.querySelector('.order-list');
var drButtons = document.querySelectorAll('.drinks button');
var salButtons = document.querySelectorAll('.salads button');
var hamButtons = document.querySelectorAll('.hamburgers button');
var finish = document.querySelector('.finish');

var sum = document.querySelector('.sum');



var order = new Order();
renderOrder();


function drinkHandler(event) {

    var itemName = event.target.className.toUpperCase();
    var drink = new Drink(Drink[itemName]);

    addInOrder(drink);

}

for (var i = 0; i < drButtons.length; i++) {
    drButtons[i].addEventListener('click', drinkHandler);
}


function saladHandler(event) {

    var itemName = event.target.className.toUpperCase();


        var salad = new Salad(Salad[itemName]);
    addInOrder(salad);


}

for (var i = 0; i < salButtons.length; i++) {
    salButtons[i].addEventListener('click', saladHandler);
}


function hamburgerHandler(event) {

    var stuffing = event.target.className.toUpperCase();
    var size = event.target.parentNode.children[0].className.toUpperCase();

    var hamburger = new Hamburger(Hamburger[size], Hamburger[stuffing]);

    addInOrder(hamburger);

}

for (var i = 0; i < hamButtons.length; i++) {
    hamButtons[i].addEventListener('click', hamburgerHandler);
}


function addInOrder(item) {


        order.addInOrder(item);
        renderOrder();



}


function renderOrder() {


    orderList.innerHTML = '';

    for (var item in order.list) {
        var li = document.createElement('li');

        switch(order.list[item].constructor) {

            case Drink:
                li.textContent = order.list[item].getName() + ' (' +
                    order.list[item].getPrice() + ' tg, ' +
                    order.list[item].getCalories() + ' cal) ';
                break;

            case Salad:
                li.textContent = order.list[item].getName() + ' (' +
                    order.list[item].getPrice() + ' tg, ' +
                    order.list[item].getCalories() + ' cal) ';
                break;

            case Hamburger:
                li.textContent = order.list[item].getName() + ' (' +
                    order.list[item].getStuffingName() + ', ' +
                    order.list[item].getPrice() + ' tg, ' +
                    order.list[item].getCalories() + ' cal) ';
                break;

        }

        li.setAttribute('itemId', item);
        li.appendChild(deleteButton());
        orderList.appendChild(li);

    }

    sum.textContent = 'Всего: ' + order.getPrice() + ' туг, ' +
        order.getCalories() + ' кал';

    console.log(order);

}


function deleteHandler(event) {


        order.deleteFromOrder(event.target.parentNode.getAttribute('itemid'));

        renderOrder();


}


function deleteButton() {

    var deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = 'Remove';

    deleteButton.addEventListener('click', deleteHandler);
    return deleteButton;

}


finish.addEventListener('click', function () {




    order.finish();



})