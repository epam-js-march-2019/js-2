var addOrderTable =  function(orderList, parent) {
	if(Array.isArray(orderList)) {
		var ordersTable = "";
		orderList.forEach(function(order) {
			ordersTable += drawOrderTable(order);
			ordersTable += '<br/>';
		});
		parent.innerHTML = ordersTable;
	}
	else if (orderList.items.length > 0) {
		// single non-empty order is a current order
		var currentOrder = drawOrderTable(orderList, true);
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

var drawOrderTable = function(order, isCurrent) {
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
		rows += `<tr class="food-item">
		<td>${index + 1}</td>
		<td>${item.name}
		<ul class="controls">
		<li class="duplicate" data-id="${index}"">+</li>
		<li class="remove" data-id="${index}"><img src="img/cursor.png"></img></li>
		</ul>
		</td>
		<td>${item.price}</td>
		<td>${item.calories}</td>
		</tr>`
		index++;
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