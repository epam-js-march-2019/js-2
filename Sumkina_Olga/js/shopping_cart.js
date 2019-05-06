class ShoppingCart {

	addFoodItem(item) {
		this._currentOrder.items.push(item);
		this._updateCurrentOrderView();
	}

	removeFoodItem(id) {
		this._currentOrder.items.splice(id, 1);
		this._updateCurrentOrderView();
	}

	submitOrder() {
		console.log("SUBMIT ORDER");
		console.log(this._currentOrder);
		console.log(this._orderList);

this._currentOrder.id = this._nextOrderId++;
		this._orderList.unshift(this._currentOrder);
		console.log("UNSHIFT ORDER");
		console.log(this._currentOrder);
		console.log(this._orderList);
		
		this._clearCurrentOrder();
		console.log("clear current order: " + this._currentOrder);
		this._updateCurrentOrderView();
		this._updateOrderListView();
	}

	_clearCurrentOrder() {
		return this._currentOrder = {
			id: "current",
			items: []
		};
	}

	_updateCurrentOrderView() {
		addOrderTable(this._currentOrder, this._currentOrderParent);
		var shoppingCart = this;

		var foodItemRows = this._currentOrderParent.querySelectorAll('.food-item');
		foodItemRows.forEach(function(e) {
			e.addEventListener('click', function() {
				shoppingCart.removeFoodItem(this.dataset.id);
			});
		});

		var orderSubmitButton = this._currentOrderParent.querySelectorAll('input[type="submit"]');
		orderSubmitButton.forEach(function(e) {
			e.addEventListener('click', function() {
				console.log('hui')
				shoppingCart.submitOrder();
			});
		});
	}

	_updateOrderListView() {
		addOrderTable(this._orderList, this._orderListParent);
	}

	constructor(currentOrderParent, orderListParent) {
		this._currentOrderParent = currentOrderParent;
		this._orderListParent = orderListParent;

		this._currentOrder = this._clearCurrentOrder();
		this._orderList = [];
		this._nextOrderId = 1;
	}

}
