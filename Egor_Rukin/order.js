//helper functions
function priceCalories(price, calories){
  return {
    price: price,
    calories: calories
  }
}

// Food object for shared methods
let Food = {
  getCalories: function(){
    return this.calories;
  },
  getPrice: function(){
    return this.price;
  }
};

// burger constructor
function Burger(size, stuffing){
  //добавить проверку аргументов
  this.price = Burger.sizes[size].price + Burger.stuffings[stuffing].price;
  this.calories = Burger.sizes[size].calories + Burger.stuffings[stuffing].calories;
  this.toString = function() {
    return `${size} burger with ${stuffing}`;
  }
}
Burger.sizes = {
  small: priceCalories(50, 20),
  large: priceCalories(100, 40)
};
Burger.stuffings = {
  cheese: priceCalories(10, 20),
  lettuce: priceCalories(20, 5),
  potato: priceCalories(15, 10),
};
//наследуем методы от Food
Burger.prototype = Object.create(Food);
Burger.prototype.constructor = Burger;


// Конструктор салатов
function Salad(type, weight){
  //добавить проверку аргументов
  this.price = Salad.types[type].price / 100 * weight;
  this.calories = Salad.types[type].calories / 100 * weight;
  this.toString = function() {
    return `${weight}g of ${type} salad`;
  }
}
Salad.types = {
  caesar: priceCalories(100, 20),
  olivier: priceCalories(50, 80)
};
//наследуем методы от Food
Salad.prototype = Object.create(Food);
Salad.prototype.constructor = Salad;

// Конструктор напитков
function Drink(type){
  //добавить проверку аргументов
  this.price = Drink.types[type].price;
  this.calories = Drink.types[type].calories;
  this.toString = function() {
    return `this is ${type}`;
  }
}
Drink.types = {
  cola: priceCalories(50, 40),
  coffee: priceCalories(80, 20)
};
//наследуем методы от Food
Drink.prototype = Object.create(Food);
Drink.prototype.constructor = Drink;

// Cart-singleton object
let Cartleton = (function () {
  let instance;
  function init() {
    //PRIVATE VARIABLES
    let order = [],
        unpayed = true,
        price = 0,
        calories = 0;
        
    //PRIVATE METHODS
    // adds new item to the order
    function addItem(item) {
      // если заказ неоплачен можно добавлять в корзину
      if (unpayed){
        order.push(item);
        console.log(order);
        var p = document.createElement('p');
        p.className = 'order-salad';
        p.innerHTML = item.toString();
        p.addEventListener('click', function(){
          removeItem(this);
          // позиция в меню такая же как в массиве объектов
          // this — кликнутый объект
          // var position = Array.prototype.indexOf.call(this.parentElement.children, this);
          // console.log(this, event, position);
        });
        var parent = document.querySelector('.order-items');
        parent.appendChild(p);
        totalPrice();
        totalCalories();        
      } else {
        console.log('no you can\'t add more');
        // throw new Error("you've already payed, you can't add new items to your order")
      }
    }
    // removes item from the order
    function removeItem(item) {
      if (unpayed){
        var position = Array.prototype.indexOf.call(item.parentElement.children, item);
        order.splice(position, 1)
        item.remove();
        console.log(order);
        totalCalories();
        totalPrice();
      } else {
        console.log('no you can\'t remove items anymore');
      };        
    }
    // calculates total price of the order
    function totalPrice() {
      price = order.reduce((sum, item) => sum + item.getPrice(), 0);
      document.querySelector('.total-value').innerHTML = price + ' тугриков';
      return price;
    }
    // calculates total calories of the order
    function totalCalories() {
      calories = order.reduce((sum, item) => sum + item.getCalories(), 0);
      document.querySelector('.calories-value').innerHTML = calories + ' калорий';
      return calories;
    }
    // blocks the order after the payment
    function payment() {
      // оплатить можно только с непустым заказом
      if (order.length){
        unpayed = false;
        var btn = document.querySelector('.make-order');
        btn.disabled = true;
        btn.innerHTML = 'заказ оплачен';
      }
    }

    //public methods
    return {
      add: addItem,
      pay: payment
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// создаем корзину-синглтон
var cart = Cartleton.getInstance();

function helper(constructor, node){
	var a = node.classList[0],
		  b = node.classList[1];
	return new constructor(a, b);
}

var burgers = document.querySelectorAll('.stuffings>li');
var salads = document.querySelectorAll('.salads button');
var drinks = document.querySelectorAll('.drinks>li');

// вешаем evenlistener на каждый элемент меню
// позже: выделить эти куски в общую функцию
burgers.forEach(function(item){
	item.addEventListener('click',
		function(){
      cart.add(helper(Burger, item));
    }
	);
});
// доделать в интерфейсе возможность добавлять 
// произвольное число грамм, конструктор позволяет
// пока захардкодил 100г
salads.forEach(function (item) {
  item.addEventListener('click',
    function () {
      var inputField = item.previousElementSibling,
          value = inputField.value;
      if (inputField.checkValidity()){
        value = Number(value) || 100;
        cart.add(new Salad(inputField.id, value));
      }
    }
  );
});
drinks.forEach(function (item) {
  item.addEventListener('click',
    function () {
      cart.add(new Drink(item.className));
    }
  );
});