// var orderArray = [
// { id: 1,
// 	items: [
// 	{
// 		name: 'hamburger1',
// 		price: 100,
// 		calories: 200
// 	},
// 	{
// 		name: 'dfgdgdg',
// 		price: 1050,
// 		calories: 2050
// 	},
// 	{
// 		name: 'hamburger3',
// 		price: 100,
// 		calories: 200
// 	}]
// },
// { id: 2,
// 	items: [
// 	{
// 		name: 'hamburge4r',
// 		price: 100,
// 		calories: 200
// 	},
// 	{
// 		name: 'hamburger5',
// 		price: 100,
// 		calories: 200
// 	},
// 	{
// 		name: 'hamburger6',
// 		price: 100,
// 		calories: 200
// 	}]
// }
// ]


var addOrderTable =  function(orderList, parent) {
	if(Array.isArray(orderList)) {
		var ordersTable = "";
		orderList.forEach(function(order) {
			ordersTable += addOrder(order);
			ordersTable += '<br/>';
		});
		parent.innerHTML = ordersTable;
	}
	else if (orderList.items.length > 0) {
		// single non-empty order is a current order
		var currentOrder = addOrder(orderList, true);
		currentOrder += '<input type="submit" value="Check Out"></input>';
		parent.innerHTML = currentOrder;
		var chechoutButton = parent.getElementsByTagName('input')[0];
		var checkoutAudio = document.getElementById('checkout-audio');
		chechoutButton.addEventListener('click', function(e) {
			checkoutAudio.play();
		});
	} else {
		parent.innerHTML = "";
	}
}

var addOrder = function(order, isCurrent) {
	return `<table class="order ${isCurrent ? "current" : ""}">\
	<caption>order #${order.id}</caption> \
	<tr class="order__criteria criteria"> \
	<td class="criteria__id">#</td> \
	<td class="criteria__name-position">Name</td> \
	<td class="criteria__price-position">Price</td> \
	<td class="criteria__calories">Calories</td> \
	</tr>\
	${addOrderItems(order.items)}\
	<tr class="order-datails"> \
	<td></td>
	<td>TOTAL</td> \
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
	var index = 0;
	var rows = "";
	items.forEach(function(item) {
		rows += `<tr class="food-item" data-id="${index++}"> \
		<td>${index}</td> \
		<td>${item.name}</td> \
		<td>${item.price}</td> \
		<td>${item.calories}</td> \
		</tr>`
	});

	return rows;
}

var doneOrder = document.getElementById('done-order');

var positons = document.querySelectorAll('.editable-position');

positons.forEach(function(position){
	position.addEventListener('click', function(e){
		var dataId = e.getAttribute('data-id');
		return dataId;
	})
})