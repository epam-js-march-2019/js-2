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
		this._currentOrder.id = this._nextOrderId++;
		this._orderList.unshift(this._currentOrder);		
		this._clearCurrentOrder();
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

		addClickListener(this._currentOrderParent.querySelectorAll('.controls .duplicate'), function() {
			var itemCopy = shoppingCart._currentOrder.items[this.dataset.id];
			shoppingCart.addFoodItem(itemCopy);
		});

		addClickListener(this._currentOrderParent.querySelectorAll('.controls .remove'), function() {
			shoppingCart.removeFoodItem(this.dataset.id);
		});

		addClickListener(this._currentOrderParent.querySelectorAll('input[type="submit"]'), function() {
			shoppingCart.submitOrder();
		})

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

var addClickListener = function (elementList, clickListener) {
	elementList.forEach(function(e) {
		e.addEventListener('click', clickListener);
	});
}