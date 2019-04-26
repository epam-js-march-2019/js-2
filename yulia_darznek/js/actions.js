var hamburgerElm = document.querySelector('#menu__hamburger')
var addHumburgerButton = hamburgerElm.querySelector('.menu__button_add')
var saladElm = document.querySelector('#menu__salad')
var addSaladButton = saladElm.querySelector('.menu__button_add')
var drinkElm = document.querySelector('#menu__drink')
var addDrinkButton = drinkElm.querySelector('.menu__button_add')

var orderElm = document.querySelector('.order')
var orderButtonPay = orderElm.querySelector('.order__button_pay')
var orderButtonNew = orderElm.querySelector('.order__button_new')
var orderList = orderElm.querySelector('.order__list')

var menuElm = document.querySelector('.menu')
var menuInputs = menuElm.querySelectorAll('.menu__input')
var itemTemplate = document
  .querySelector('#order-item')
  .content.querySelector('.order-item')

var elements = [
  {
    button: addSaladButton,
    parentElm: saladElm,
    name: 'salad',
    constr: Salad
  },
  {
    button: addDrinkButton,
    parentElm: drinkElm,
    name: 'drink',
    constr: Drink
  },
  {
    button: addHumburgerButton,
    parentElm: hamburgerElm,
    name: 'hamburger',
    constr: Hamburger
  }
]

var order = new Order()

function checkOrder() {
  if (!order.items.length) {
    orderElm.classList.add('order__empty')
    orderList.textContent = ''
  } else {
    orderElm.classList.remove('order__empty')
  }
  if (order.isPaid) {
    orderElm.classList.add('order__paid')
  } else {
    orderElm.classList.remove('order__paid')
  }
}

function setValuesInCard(parentElm, valuePrice, valueCalories) {
  parentElm.querySelector('.menu__card-sum').textContent =
    valuePrice + PRICE_UNIT
  parentElm.querySelector('.menu__card-calories').textContent =
    valueCalories + CALORIES_UNIT
}

function updateOrderTotalValues() {
  document.querySelector('.order__total-calories').textContent =
    order.calculateCalories() + CALORIES_UNIT
  document.querySelector('.order__total-sum').textContent =
    order.calculateTotal() + PRICE_UNIT
}

function clearForm(parentElm, elm) {
  parentElm.querySelector('input[name=' + elm + ']:checked').checked = false
  parentElm.querySelector('#' + elm + '-qty').value = ''
  parentElm.querySelector('.menu__button_add').disabled = true

  if (elm === 'hamburger') {
    parentElm.querySelector('#hamburger-stuffing').selectedIndex = 0
  }

  setValuesInCard(parentElm, INITIAL_VALUE_PRICE, INITIAL_VALUE_CALORIES)
}

function checkItem(parentElm, elm, constr) {
  var itemName = parentElm.querySelector('input[name=' + elm + ']:checked')
  var itemQty = parentElm.querySelector('#' + elm + '-qty')
  var addButton = parentElm.querySelector('.menu__button_add')
  var stuffing =
    elm === 'hamburger' ? parentElm.querySelector('#hamburger-stuffing') : ''

  if (itemName && itemQty.value >= MIN_ITEM_VALUE) {
    if (elm !== 'hamburger') {
      var item = new constr(constr[itemName.value.toUpperCase()])
    } else if (elm === 'hamburger' && stuffing.selectedIndex !== 0) {
      var item = new constr(
        constr[itemName.value.toUpperCase()],
        constr[stuffing.value.toUpperCase()]
      )
    }
  } else {
    addButton.disabled = true
  }

  if (item) {
    item.qty = itemQty.value
    item.updateParams()
    setValuesInCard(parentElm, item.priceTotal, item.caloriesTotal)
    addButton.disabled = false

    return item
  }
}

function addItemToOrder(parentElm, elm, constr) {
  var newItem = checkItem(parentElm, elm, constr)
  order.addItemToOrder(newItem)
  clearForm(parentElm, elm)
  updateOrderTotalValues()
  createElement(newItem)
  checkOrder()
}

function setParams(elm, data) {
  var stuffing = data.stuffing ? data.stuffing : ''

  elm.classList.add('order__item')
  elm.querySelector('.order__item-title').textContent = data.name
  elm.querySelector('.order__item-value_stuffing').textContent = stuffing
  elm.querySelector('.order__item-value_qty').textContent = data.qty
  elm.querySelector('.order__item-value_calories').textContent =
    data.caloriesTotal + CALORIES_UNIT
  elm.querySelector('.order__item-value_price').textContent =
    data.priceTotal + PRICE_UNIT

  var orderButtonDel = elm.querySelector('.order__item-button_del')

  orderButtonDel.addEventListener('click', function(evt) {
    orderList.removeChild(evt.target.parentNode.parentNode)
    order.removeItem(data)
    checkOrder()
    updateOrderTotalValues()
  })
}

function createElement(data) {
  var itemElement = itemTemplate.cloneNode(true)
  var fragment = document.createDocumentFragment()
  const liElm = document.createElement('li')

  fragment.appendChild(itemElement)
  liElm.appendChild(fragment)

  setParams(liElm, data)
  orderList.appendChild(liElm)
}

elements.forEach(function(elm) {
  elm.button.addEventListener('click', function() {
    addItemToOrder(elm.parentElm, elm.name, elm.constr)
  })

  elm.parentElm.addEventListener('change', function() {
    checkItem(elm.parentElm, elm.name, elm.constr)
  })
})

orderButtonPay.addEventListener('click', function() {
  order.pay()
  menuElm.style.display = 'none'
  checkOrder()

  menuInputs.forEach(function(elm) {
    elm.checked = false
  })
})

orderButtonNew.addEventListener('click', function() {
  order = new Order()
  menuElm.style.display = 'block'
  checkOrder()
})

window.onload = checkOrder()
