
var content = document.querySelector('.content');


//create new Order
var order = new Order();

// toggle forms
content.addEventListener('click', function (e) {
  // toggle form in section by clicking on add button
  if (e.target.classList.contains('js-toggle')) {
    var list = e.target.closest('.content__item').querySelector('.list');
    list.classList.toggle('list-active')
  }
})

// drink sections events and calculations

// drinks section nodes
var drinksNode = document.querySelector('.js-drinks');
var targetDrinkName = drinksNode.querySelector('.js-item-name');
var targetDrinkPrice = drinksNode.querySelector('.js-item-sum');
var targetDrinkCalory = drinksNode.querySelector('.js-item-calories');
var drinksAddButton = drinksNode.querySelector('.js-add-item');

// handle input change and call function for calculating section output

drinksNode.addEventListener('change', function () {
  calculateOutputDrink()
})


// add drink to order, recalculate order, recalculate order total values

drinksAddButton.addEventListener('click', function () {
  var { type } = drinksNode.querySelector('input:checked').dataset;
  var quantity = drinksNode.querySelector('.input-quantity').value;

  var drink = new Drink(Drink[type], quantity)

  order.addPosition(drink)
  calculateOrder();
  calculateOrderTotalValues();
})

// calculate drink section output by checking checked radio and quantity input 

function calculateOutputDrink() {
  var { drink, price, calory } = drinksNode.querySelector('input:checked').dataset

  var quantity = drinksNode.querySelector('.input-quantity');

  targetDrinkName.textContent = drink;
  targetDrinkPrice.textContent = (price * quantity.value) + ' ' + VALUE_PRICE;
  targetDrinkCalory.textContent = (calory * quantity.value) + ' ' + VALUE_CALORY;
}


// salad sections events and calculations

// salads section nodes
var saladNode = document.querySelector('.js-salad');
var targetSaladName = saladNode.querySelector('.js-item-name');
var targetSaladPrice = saladNode.querySelector('.js-item-sum');
var targetSaladCalory = saladNode.querySelector('.js-item-calories');
var saladsAddButton = saladNode.querySelector('.js-add-item');

// handle input change and call function for calculating section output

saladNode.addEventListener('change', function () {
  calculateOutputSalad()
})

// add salad to order, recalculate order, recalculate order total values
saladsAddButton.addEventListener('click', function () {
  var { type } = saladNode.querySelector('input:checked').dataset;
  var weight = saladNode.querySelector('.input-quantity').value;



  var salad = new Salad(Salad[type], weight / 100)

  order.addPosition(salad)
  calculateOrder();
  calculateOrderTotalValues();
})

// calculate salad section output by checking checked radio and quantity input 

function calculateOutputSalad() {
  var { salad, price, calory } = saladNode.querySelector('input:checked').dataset

  var quantity = saladNode.querySelector('.input-quantity');

  targetSaladName.textContent = salad;
  targetSaladPrice.textContent = (price * quantity.value) / 100 + ' ' + VALUE_PRICE;
  targetSaladCalory.textContent = (calory * quantity.value) / 100 + ' ' + VALUE_CALORY;

}

// hamburger sections events and calculations

// salads section nodes

var hamburgerNode = document.querySelector('.js-hamburger');
var targetHamburgerName = hamburgerNode.querySelector('.js-item-name');
var targetHamburgerPrice = hamburgerNode.querySelector('.js-item-sum');
var targetHamburgerCalory = hamburgerNode.querySelector('.js-item-calories');
var hamburgersAddButton = hamburgerNode.querySelector('.js-add-item');


// handle input change and call function for calculating section output


hamburgerNode.addEventListener('change', function (e) {
  calculateOutputHamburger()
})


// add hamburger to order, recalculate order, recalculate order total values

hamburgersAddButton.addEventListener('click', function () {
  var dataSize = hamburgerNode.querySelector('[name=hamburger-size]:checked').dataset;
  var dataStuffing = hamburgerNode.querySelector('[name=hamburger-stuffing]:checked').dataset


  var quantity = hamburgerNode.querySelector('.input-quantity').value;




  if (dataSize && dataStuffing) {
    var hamburger = new Hamburger(Hamburger[dataSize.type], quantity, Hamburger[dataStuffing.type])

    order.addPosition(hamburger)
    calculateOrder();
    calculateOrderTotalValues();
  }

})


// calculate hamburger section output by checking checked radio and quantity input 

function calculateOutputHamburger() {
  var sizeDataNode = hamburgerNode.querySelector('[name=hamburger-size]:checked')
  var stuffingDataNode = hamburgerNode.querySelector('[name=hamburger-stuffing]:checked')

  var quantity = hamburgerNode.querySelector('.input-quantity');

  if (sizeDataNode && stuffingDataNode) {
    var stuffingData = stuffingDataNode.dataset;
    var sizeData = sizeDataNode.dataset;

    targetHamburgerName.textContent = sizeData.size + " hamburger with " + stuffingData.stuffing;
    targetHamburgerPrice.textContent = (parseInt(sizeData.price) + parseInt(stuffingData.price)) * quantity.value + ' ' + VALUE_PRICE;
    targetHamburgerCalory.textContent = (parseInt(sizeData.calory) + parseInt(stuffingData.calory)) * quantity.value + ' ' + VALUE_CALORY;
  }


}


// --order


var orderNode = document.querySelector('.js-order');
var orderButtonPay = orderNode.querySelector('.js-order-pay');
var orderList = orderNode.querySelector('.js__total-order');
var orderAddButton = hamburgerNode.querySelector('.js-add-item');


// calculate Order, create orders list with remove button 

function calculateOrder() {
  var itemOrder = order.getItems();
  // clear orderList 
  orderList.innerHTML = '';

  itemOrder.forEach(function (item, i) {
    var elem = document.createElement('li');
    elem.classList.add('order__list-item');
    var elemContent = item.name + ' x ' + item.quantity + ',  price: ' + parseInt(item.type.price) * parseInt(item.quantity) + ' ' + VALUE_PRICE + ', calories:  ' + parseInt(item.type.calories
    ) * parseInt(item.quantity) + ' ' + VALUE_CALORY
    elem.textContent = elemContent

    var buttonRemove = document.createElement('button');
    // adding class for future remove handling with event delegation
    buttonRemove.classList.add('js-button-remove');
    // adding data attribute for easy finding element index when removing item
    buttonRemove.setAttribute('data-index', i);
    buttonRemove.textContent = 'X';

    elem.appendChild(buttonRemove);

    orderList.appendChild(elem);
  });
}


//handle click for removing single elements in order, call functions to recalculate price and calories items

orderList.addEventListener('click', function (e) {
  if (e.target.classList.contains('js-button-remove')) {

    // get index of parent element

    var buttonDataset = e.target.dataset

    order.deletePosition(buttonDataset.index)
    calculateOrder()
    calculateOrderTotalValues()
  }

})

//handle click creating new order and disable menu

orderNode.addEventListener('click', function (e) {
  if (e.target.classList.contains('js-order-pay')) {

    //checking items in order

    if (order.getItems().length !== 0) {
      order.payForTheOrder()
    }
    else {
      alert('Choose something!')
    }
    //overlay menu
    var content = document.querySelector('.content');
    content.classList.add('content__overlay');
    //create button to create new order
    var buttonNew = orderNode.querySelector('.button__new');
    buttonNew.classList.toggle('button__new-active');
  }
})

//clearing checked inputs

function clearInputs() {
  var input = document.querySelectorAll('input:checked');
  for (var i = 0; i < input.length; i++) {
    input[i].checked = false
  }
};

// handle click to clear orderList, call function to clearing orderList, checked inputs, total summary and total calories


orderNode.addEventListener('click', function (e) {
  if (e.target.classList.contains('button__new')) {
    order.deleteAllPosition();
    clearInputs()
    calculateOrder()
    orderNode.querySelector('.js-order-calory').textContent = 0 + ' ' + VALUE_CALORY;
    orderNode.querySelector('.js-order-sum').textContent = 0 + ' ' + VALUE_PRICE;
    var content = document.querySelector('.content');
    content.classList.remove('content__overlay');



    //uncomment this function if you dont want to toggle form again and want to reload document
    // document.location.reload(true); 

  }
})


// ---get total sum and calories

function calculateOrderTotalValues() {
  orderNode.querySelector('.js-order-calory').textContent = order.calculateTotalCalories() + ' ' + VALUE_CALORY;
  orderNode.querySelector('.js-order-sum').textContent = order.calculateTotalPrice() + ' ' + VALUE_PRICE;
}


