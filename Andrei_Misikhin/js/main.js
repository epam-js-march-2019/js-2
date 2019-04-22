var zakazList = document.querySelector('.zakaz-list');
var drinkButtons = document.querySelectorAll('.drinks button');
var saladButtons = document.querySelectorAll('.salads button');
var hamburgerButtons = document.querySelectorAll('.hamburgers button');
var payButton = document.querySelector('.pay');

var zakazSummary = document.querySelector('.summary');
var zakazTitle = document.querySelector('.zakaz header');


var order = new Order();
drawOrder();


function drinkHandler(event) {

  var itemName = event.target.className.toUpperCase();
  var drink = new Drink(Drink[itemName]);

  addListItem(drink);

}

for (var i = 0; i < drinkButtons.length; i++) {
  drinkButtons[i].addEventListener('click', drinkHandler);
}


function saladHandler(event) {

  var itemName = event.target.className.toUpperCase();
  var weight = document.querySelector('#salad-weight');
  weight = weight.valueAsNumber;

  try {
    var salad = new Salad(Salad[itemName], weight);
    addListItem(salad);
  }
  catch(e) {
    alert(e);
  }

}

for (var i = 0; i < saladButtons.length; i++) {
  saladButtons[i].addEventListener('click', saladHandler);
}


function hamburgerHandler(event) {

  var stuffing = event.target.className.toUpperCase();
  var size = event.target.parentNode.children[0].className.toUpperCase();

  var hamburger = new Hamburger(Hamburger[size], Hamburger[stuffing]);

  addListItem(hamburger);

}

for (var i = 0; i < hamburgerButtons.length; i++) {
  hamburgerButtons[i].addEventListener('click', hamburgerHandler);
}


function addListItem(item) {

  try {
    order.addListItem(item);
    drawOrder();
  }
  catch(e) {
    alert(e);
  }

}


function drawOrder() {

  zakazTitle.textContent = order.isPaid
    ? 'Заказ оплачен'
    : 'Заказ не оплачен';

  zakazList.innerHTML = '';

  for (var item in order.list) {
    var li = document.createElement('li');

    switch(order.list[item].constructor) {

      case Drink:
        li.textContent = order.list[item].getName() + ' (' + 
          order.list[item].getPrice() + ' туг, ' +
          order.list[item].getCalories() + ' кал) ';
      break;

      case Salad:
        li.textContent = order.list[item].getName() + ' (' + 
          order.list[item].getWeight() + ' г, ' +
          order.list[item].getPrice() + ' туг, ' +
          order.list[item].getCalories() + ' кал) ';
      break;

      case Hamburger:
        li.textContent = order.list[item].getName() + ' (' + 
          order.list[item].getStuffingName() + ', ' +
          order.list[item].getPrice() + ' туг, ' +
          order.list[item].getCalories() + ' кал) ';
      break;

    }

    li.setAttribute('itemId', item);
    li.appendChild(deleteButton());
    zakazList.appendChild(li);

  }

  zakazSummary.textContent = 'Всего: ' + order.getPrice() + ' туг, ' +
    order.getCalories() + ' кал';

  console.log(order);

}


function deleteHandler(event) {

  try {
    order.deleteListItem(event.target.parentNode.getAttribute('itemid'))
    
    drawOrder();
  }
  catch (e) {
    alert(e);
    console.log(typeof event.target.parentNode.getAttribute('itemid'))
  }

}


function deleteButton() {

  var deleteButton = document.createElement('a');
  deleteButton.setAttribute('href', '#');
  deleteButton.textContent = 'Удалить';

  deleteButton.addEventListener('click', deleteHandler);
  return deleteButton;

}


payButton.addEventListener('click', function () {

  try {
    if (order.isPaid) {
      order.payBackOrder();
      payButton.textContent = 'Оплатить';
      drawOrder();
    } else {
      order.payOrder();
      payButton.textContent = 'Забрать деньги';
      drawOrder();
    }
  }
  catch(e) {
    alert(e);
  }
  
})