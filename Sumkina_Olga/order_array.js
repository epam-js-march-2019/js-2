var orderArray = [
{ order_id: 1,
	items: [
	{
		id: 1,
		name: 'hamburger1',
		price: 100,
		calories: 200
	},
	{
		id: 2,
		name: 'hamburger2',
		price: 100,
		calories: 200
	},
	{
		id: 3,
		name: 'hamburger3',
		price: 100,
		calories: 200
	}]
},
{ order_id: 2,
	items: [
	{
		id: 1,
		name: 'hamburge4r',
		price: 100,
		calories: 200
	},
	{
		id: 2,
		name: 'hamburger5',
		price: 100,
		calories: 200
	},
	{
		id: 3,
		name: 'hamburger6',
		price: 100,
		calories: 200
	}]
}
]


var addOrderTable =  function(orders, parent) {

	orders.forEach(function(order) {
		parent.innerHTML += addOrder(order);
	});
}

var addOrder = function(order) {
	return  '<table class="order">\
	<caption>order #2</caption> \
	<tr class="order__criteria criteria"> \
	<td class="criteria__id">#</td> \
	<td class="criteria__name-position">Name</td> \
	<td class="criteria__price-position">Price</td> \
	<td class="criteria__calories">Calories</td> \
	</tr>'
		+ addOrderItems(order.items)
		 +	'<tr> \
	<td colspan="2" align="right">TOTAL</td> \
	<td>$100</td> \
	<td>200 cal</td> \
	</tr> \
	</table>' 

}

var addOrderItems = function(items) {
	var rows = "";
	items.forEach(function(item) {
		rows += '<tr> \
		<td>' +  item.id +'</td> \
		<td>'+ item.name +'</td> \
		<td>'+ item.price +'</td> \
		<td>'+ item.calories +'</td> \
		</tr>'
	});

	return rows;
}

var doneOrder = document.getElementById('done-order');

addOrderTable(orderArray, doneOrder);


// var table = document.createElement('table');

// var criteria = document.createElement('tr');
// var id = document.createElement('td');
// var name = document.createElement('td');
// var price = document.createElement('td');
// var calories = document.createElement('td');

// table.className ='order';
// criteria.className ='order_criteria';
// id.className ='id_criteria';
// name.className = 'name_criteria';
// price.className = 'price_criteria';
// calories.className = 'calories_criteria';

// id.innerHTML = '#';
// name.innerHTML = 'Name';
// price.innerHTML = 'Price';
// calories.innerHTML = 'Calories';

// criteria.appendChild(id);
// criteria.appendChild(name);
// criteria.appendChild(price);
// criteria.appendChild(calories);

// table.appendChild(criteria);
// document.body.appendChild(table);

// orderArray.forEach(function(order){
// 	var position = document.createElement('tr');
// 	var idPosition = document.createElement('td');
// 	var namePosition = document.createElement('td');
// 	var pricePosition = document.createElement('td');
// 	var caloriesPosition = document.createElement('td');

// 	idPosition.className ='id_criteria';
// 	namePosition.className = 'name_criteria';
// 	pricePosition.className = 'price_criteria';
// 	caloriesPosition.className = 'calories_criteria';

// 	idPosition.innerHTML = order.id;
// 	namePosition.innerHTML = order.name;
// 	price.innerHTML = order.price;
// 	caloriesPosition.innerHTML = order.calories;

// 	position.appendChild(idPosition);
// 	position.appendChild(namePosition);
// 	position.appendChild(pricePosition);
// 	position.appendChild(caloriesPosition);

// 	table.appendChild(position);

// });