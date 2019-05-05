/*
* Render object is responsible for rendereng GUI
* in react to user actions
 */
const render = {
	container: document.querySelector('#products-list'),
	orderSummary: document.querySelector('#order-summary'),
	totalCalories: document.querySelector('#total-calories'),
	add: function (product) {
		/* Create product container div */
		const productDiv = document.createElement('div');
		productDiv.setAttribute('id', product.item.guid + '-cart');
		productDiv.setAttribute('class', 'cart-item');

		/* Create heading */
		const heading = document.createElement('h4');
		heading.innerText = product.item.type;
		productDiv.appendChild(heading);

		/* Update header and add list of stuffing for hamburgers */
		if (product.item.name === 'Hamburger') {
			heading.innerText += ' Hamburger';
			const stuffing = this.generateStuffingList(product.item);
			productDiv.appendChild(stuffing);
		}

		/* Create current product total calories field */
		caloriesField = document.createElement('p');
		caloriesField.setAttribute('id', product.item.guid + "-calories");
		const calories = product.item.getCalories() * product.amount;
		caloriesField.innerText = "Calories: " + calories;
		productDiv.appendChild(caloriesField);

		/* Create current product total price field */
		priceField = document.createElement('p');
		priceField.setAttribute('id', product.item.guid + "-price");
		const price = product.item.getPrice() * product.amount;
		priceField.innerText = "Cost: " + price;
		productDiv.appendChild(priceField);


		/* Create label for amount */
		const label = document.createElement('label');
		label.setAttribute("for", product.item.guid);
		label.innerHTML = "Amount:";
		productDiv.appendChild(label);

		/* Create amount field and give it unique id */
		amount = document.createElement('input');
		amount.setAttribute("id", product.item.guid);
		amount.setAttribute("value", product.amount);
		amount.setAttribute('class', 'product-amount');
		amount.setAttribute('type', 'number');
		if (product.item.name != 'Salad') {
			amount.setAttribute('min', 1);
		}
		else {
			amount.setAttribute('min', 100);
			amount.setAttribute('step', 50);
		}
		amount.addEventListener('change', cart.onAmountChange);
		productDiv.appendChild(amount);

		/* Create delete button */
		deleteButton = document.createElement('button');
		deleteButton.setAttribute('id', product.item.guid + "-delete");
		deleteButton.setAttribute('value', product.item.guid);
		deleteButton.setAttribute('class', 'cart-button');
		deleteButton.addEventListener('click', cart.deleteProduct);
		deleteButton.innerHTML = '&times';
		productDiv.appendChild(deleteButton);


		this.container.appendChild(productDiv);

		this.updateSum();
	},
	generateStuffingList: function (item) {
		const list = document.createElement('ul');
		for (let stuff in item.stuffing) {
			if (item.stuffing[stuff]) {
				let li = document.createElement('li');
				li.innerHTML = stuff;
				list.appendChild(li);
			}
		}
		return list;
	},
	updateSum: function () {
		const cost = cart.getTotalPrice();
		const calories = cart.getTotalCalories();
		this.orderSummary.innerText = cost + " ₮";
		this.totalCalories.innerText = calories;
	},
	updateAmount: function (guid) {
		const amount = document.querySelector(`#${guid}`);
		amount.value = cart.products[guid].amount;
		const calories = document.querySelector(`#${guid}-calories`);
		calories.innerText = "Calories: " + cart.getCalories(guid);
		const	price = document.querySelector(`#${guid}-price`);
		price.innerText = "Cost: " + cart.getPrice(guid);
		this.updateSum();
	}
};

/*
* Cart object works as a storage for currently
* selected items
 */
const cart = {
	/*
	* Products in cart are stored as follows:
	* product = {guid: {item:item, amount:amount}}
	* Where:
	* guid - unique field that represents item type and stuffing
	* item - instance of Hamburger, Salad or whatever
	* amount - current amount of that item in Cart
	 */
	products: {},
	add: function (name, type, amount, stuffing) {
		const guid = this.makeGuid(type, stuffing);
		if (!this.inCart(guid)) {
			const item = new ProductFactory(name, type, stuffing);
			this.products[guid] = {item: item, amount: Number(amount)};
			render.add(this.products[guid]);
		}
		else {
			this.products[guid].amount += Number(amount);
			render.updateAmount(guid);
		}
	},
	makeGuid: function (type, stuffing) {
		let guid = type;
		if (stuffing) {
			for (item in stuffing) {
				stuffing[item] && (guid += `-${item}`);
			}
		}
		return guid;
	},
	inCart: function(guid) {
		for (product in this.products) {
			if (product === guid) {
				return true;
			}
		}
		return false;
	},
	onAmountChange: function (event) {
		cart.products[event.target.id].amount = Number(event.target.value);
		render.updateAmount(event.target.id);
	},
	getTotalPrice: function () {
		let price = 0;
		for (product in this.products) {
			price += (this.products[product].item.getPrice() * this.products[product].amount);
		}
		return price;
	},
	getTotalCalories: function () {
		let calories = 0;
		for (product in this.products) {
			calories += (this.products[product].item.getCalories() * this.products[product].amount);
		}
		return calories;
	},
	getCalories: function (guid) {
		return this.products[guid].item.getCalories() * this.products[guid].amount;
	},
	getPrice: function (guid) {
		return this.products[guid].item.getPrice() * this.products[guid].amount;
	},
	deleteProduct: function (event) {
		delete cart.products[event.target.value];
		const cartItem = document.querySelector(`#${event.target.value}-cart`);
		cartItem.parentElement.removeChild(cartItem);
		render.updateSum();
	}

};