//элементы меню
function MenuItem(name, type) {
    this.name = name;
    this.type = type;
}

MenuItem.prototype.getName = function() {
    return this.name;
};
MenuItem.prototype.getType = function() {
    return this.type;
};


function Hamburger(name, type, stuffing) {
    MenuItem.apply(this, arguments);
    this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.prototype.constructor = Hamburger;

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    name: 'small',
    price: 50,
    calories: 20
};
Hamburger.SIZE_LARGE = {
    name: 'large',
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10
};
Hamburger.prototype.getStuffing = function() {
    return this.stuffing;
}
Hamburger.prototype.calculatePrice = function() {
    return this.getType().price + this.getStuffing().price;
};
Hamburger.prototype.calculateCalories = function() {
    return this.getType().calories + this.getStuffing().calories;
};

function Drink(name, type) {
    MenuItem.apply(this, arguments);
}

Drink.prototype = Object.create(MenuItem.prototype);
Drink.prototype.constructor = Drink;

Drink.cola = {
    name: 'cola',
    price: 50,
    calories: 40
};
Drink.coffee = {
    name: 'coffee',
    price: 80,
    calories: 20
};
Drink.prototype.calculatePrice = function() {
    return this.getType().price;
};
Drink.prototype.calculateCalories = function() {
    return this.getType().calories;
};


function Salad(name, type, weight) {
    MenuItem.apply(this, arguments);
    this.weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.prototype.constructor = Salad;

Salad.cezar = {
    name: 'cezar',
    price: 100,
    calories: 20
};
Salad.olivie = {
    name: 'olivie',
    price: 50,
    calories: 80
};

Salad.prototype.getWeight = function() {
    return this.weight;
};

Salad.prototype.calculatePrice = function() {
    return this.getType().price * this.getWeight() / 100;
};

Salad.prototype.calculateCalories = function() {
    return this.getType().calories * this.getWeight() / 100;
};

//работа с заказом
function Order() {
    this.args = [].slice.call(arguments);
    this.isPaid = false;
}

Order.prototype.addOrder = function(position) {
    if (!this.isPaid) {
        this.args.push(position)
    } else {
        alert("You paid for the order, so you can't change order.");    
    }
}

Order.prototype.deleteOrder = function(item) {
    if (!this.isPaid) {
        this.args.splice(this.args.indexOf(item), 1)
    } else {
        alert("You paid for the order, so you can't change order.");
    }
}

Order.prototype.getFinalCalorific = function() {
    return this.args.reduce(function(getCalorific, position) {
        return getCalorific + position.calculateCalories();
    }, 0) + ' kcal';
};

Order.prototype.getFinalPrice = function() { 
    var totalPrice = 0;
    order.args.forEach(
    function(item){
    totalPrice +=item.calculatePrice()
}) 
    return totalPrice + 'tugrik'
}
    ;

Order.prototype.Paid = function() {
    if(order.args.length == 0){
		alert('Order is empty!');
        return;
	};
    if (order.isPaid) {
        alert('You paid for the order!');
        return;
    }
    this.isPaid = true;
    alert('You paid for the order. Order is accepted.')
}


//работа с интерфейсом
var order = new Order();



function buyBurger() {
    if (order.isPaid) {
        alert("You paid for the order, so you can't change order.");
        return;
    }
    var BurgerStuffVal = $(".menu_ul_li__burger__stuff")[0].value;
    var BurgersizeVal = $(".menu_ul_li__burger__size")[0].value;
    switch (BurgersizeVal) {
        case 'small':
            Burgersize = Hamburger.SIZE_SMALL;
            break;
        case 'big':
            Burgersize = Hamburger.SIZE_LARGE;
            break;
        default:
        alert('Choise size');
        return;
    }
    switch (BurgerStuffVal) {
        case 'cheese':
            BurgerStuff = Hamburger.STUFFING_CHEESE;
            break;
        case 'salad':
            BurgerStuff = Hamburger.STUFFING_SALAD;
            break;
        case 'potato':
            BurgerStuff = Hamburger.STUFFING_POTATO;
            break;
        default:
        alert('Choise stuff');
        return;
    }

    var burger = new Hamburger('Burger', Burgersize, BurgerStuff);
    order.addOrder(burger);
    final();
    addOrderItem(burger, burger.name + ' ' + BurgersizeVal + ' ' + BurgerStuffVal, burger.calculatePrice(), burger.calculateCalories())
}

function buySalad() {
    if (order.isPaid) {
        alert("You paid for the order, so you can't change order.");
        return;
    }
    var SaladVal = $(".menu_ul_li__salad")[0].value;
    var SaladGram = $(".menu_ul_li__gramm")[0].value;
    switch (SaladVal) {
        case 'cezar':
            SaladType = Salad.cezar;
            break;
        case 'olivie':
            SaladType = Salad.olivie;
            break;
        default:
        alert('Choise salad');
        return;
    }
    if(SaladGram==""){alert('Choise gramm');return;}
    var salad = new Salad('Salad', SaladType, SaladGram);
    console.log(salad)
    order.addOrder(salad);
    final();
    addOrderItem(salad, salad.name + ' ' + SaladVal + ' Gramm: ', salad.calculatePrice(), salad.calculateCalories())
}

function buyDrink() {
    if (order.isPaid) {
        alert("You paid for the order, so you can't change order.");
        return;
    }
    var DrinkTypeVal = $(".menu_ul_li__drink")[0].value;
    switch (DrinkTypeVal) {
        case 'cola':
            DrinkType = Drink.cola;
            break;
        case 'coffee':
            DrinkType = Drink.coffee;
            break;
        default:
        alert('Choise drink');
        return;
    }
    var drink = new Drink('Drink', DrinkType);
    console.log(drink)
    order.addOrder(drink);
    final();
    addOrderItem(drink, drink.name + ' ' + DrinkTypeVal, drink.calculatePrice(), drink.calculateCalories())
}
//изменение стоимости и изменение ккал
function final() {
    $(".order_price")[0].innerHTML = order.getFinalPrice();
    $(".order_kkal")[0].innerHTML = order.getFinalCalorific();
}
//добавление в корзину
function addOrderItem(item, name, price, kcal) {
    var li = jQuery('<li/>', {
        class: 'order_ul__item',
        html: 'Name: ' + name + ' Price: ' + price + ' kcal: ' + kcal //+ ' <button class="order_ul__item__Delete">Delete</button>'
    }).appendTo('.order_ul')[0];

    var button = document.createElement('button');
    $(button).addClass("order_ul__item__Delete")
    .html("Delete")
    .appendTo(li) 
    .click(function () {
    li.remove();
    order.deleteOrder(item);
    final();
    })
}
