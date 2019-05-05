var orderArray = [
{ id: 1,
	items: [
	{
		name: 'hamburger1',
		price: 100,
		calories: 200
	},
	{
		name: 'dfgdgdg',
		price: 1050,
		calories: 2050
	},
	{
		name: 'hamburger3',
		price: 100,
		calories: 200
	}]
},
{ id: 2,
	items: [
	{
		name: 'hamburge4r',
		price: 100,
		calories: 200
	},
	{
		name: 'hamburger5',
		price: 100,
		calories: 200
	},
	{
		name: 'hamburger6',
		price: 100,
		calories: 200
	}]
}
]


var addOrderTable =  function(orders, parent) {
var ordersTable = "";
	orders.forEach(function(order) {
		ordersTable += addOrder(order);
	});
	parent.innerHTML = ordersTable;
}

var addOrder = function(order) {

	return  `<table class="order">\
	<caption>order #${order.id}</caption> \
	<tr class="order__criteria criteria"> \
	<td class="criteria__id">#</td> \
	<td class="criteria__name-position">Name</td> \
	<td class="criteria__price-position">Price</td> \
	<td class="criteria__calories">Calories</td> \
	</tr>\
	${addOrderItems(order.items)}\
	<tr class="order-datails"> \
	<td colspan="2" align="right">TOTAL</td> \
	<td>$${totalPrice(order.items)}</td> \
	<td>${totalCalories(order.items)} cal</td> \
	</tr> \
	</table>`
}

var totalPrice = function(items){
	var sum = 0;
	items.forEach(function(item){
		sum += item.price;
	});

	return sum;
}

var totalCalories = function(items){
	var sum = 0;
	items.forEach(function(item){
		sum += item.calories;
	});

	return sum;
}

var addOrderItems = function(items) {
	var index = 1;
	var rows = "";
	items.forEach(function(item) {
		rows += `<tr> \
		<td>${index++}</td> \
		<td>${item.name}</td> \
		<td>${item.price}</td> \
		<td>${item.calories}</td> \
		</tr>`
	});

	return rows;
}

var doneOrder = document.getElementById('done-order');

addOrderTable(orderArray, doneOrder);
