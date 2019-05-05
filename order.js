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
      if (unpayed){
        order.push(item);
      } else {
        console.log('no you cant add more');
        // throw new Error("you've already payed, you can't add new items to your order")
      }
    }
    // removes item from the order
    function removeItem() {
      //add functionality
    }
    // calculates total price of the order
    function totalPrice() {
      price = order.reduce((sum, item) => sum + item.getPrice(), 0);
    }
    // calculates total calories of the order
    function totalCalories() {
      calories = order.reduce((sum, item) => sum + item.getCalories(), 0);
    }
    // blocks the order after the payment
    function payment() {
      unpayed = false;
    }

    //public methods
    return {
      add: addItem,
      remove: removeItem,
      pay: payment,
      showOrder: function(){
        return order;
      }
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

let cart = Cartleton.getInstance();
