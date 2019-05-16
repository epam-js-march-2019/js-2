import { Order } from "./order.js";

import { Hamburger } from "./hamburger.js";
import { Salad } from "./salad.js";
import { Drink } from "./drink.js";

	/**
	 * Константы с пунктами меню:
	 *	- название блюда 
	 *	- цена
	 *	- калории
	 */
Hamburger.SIZE_SMALL = { 
	name: 'hamburger-small', 
	price: 50, 
	calories: 20 
};
Hamburger.SIZE_LARGE = { 
	name: 'hamburger-big', 
	price: 100, 
	calories: 40 
};
Hamburger.STUFFING_CHEESE = { 
	name: 'hamburger-stuffing-cheese', 
	price: 10, 
	calories: 20 
};
Hamburger.STUFFING_SALAD = { 
	name: 'hamburger-stuffing-salad', 
	price: 20, 
	calories: 5 
};
Hamburger.STUFFING_POTATO = { 
	name: 'hamburger-stuffing-potato', 
	price: 15, 
	calories: 10 
};

Salad.CAESAR = { 
	name: 'salad-caesar', 
	price: 100, 
	calories: 20 
};

Salad.OLIVIER = { 
	name: 'salad-olivier', 
	price: 50, 
	calories: 80 
};

Drink.JUICE = { 
	name: 'drink-juice', 
	price: 50, 
	calories: 40 
};
Drink.COFFEE = { 
	name: 'drink-coffee', 
	price: 80, 
	calories: 20 
};

function Intermediary() {};
	
	// Получение текущей стоимости заказа
Intermediary.prototype.getCurrentPrice = function(data) {	
	var order = Intermediary.prototype._checkData(data);

	return order.getCurrentPrice();
};

	// Получение текущей калорийности заказа
Intermediary.prototype.getCurrentCalories = function(data) {	
	var order = Intermediary.prototype._checkData(data);

	return order.getCurrentCalories();
};
		
	// Оплата заказа
Intermediary.prototype.pay = function(data) {	
	var order = Intermediary.prototype._checkData(data),
		infoOrder = order.getInfoOrder();

	order.pay();

	return infoOrder;
};

Intermediary.prototype._checkData = function(data) {
	var order = new Order();

	for(var i = 0; i < data.length; i++) {
		var item = data[i],
			count = item.count,
			product;

			/** 
			 * Формирование пунктов заказа new:
			 *	Входные данные:
			 *	- Постоянная меню
			 *	- Вес позиции
			 *
			 *	Выходные данные:
			 *	- calories: подсчитанные калории блюда
			 *	- price: подсчитанная цена блюда
			 *	- type: тип блюда (константа выше)
			 *	- weight: объём блюда
			 */
		switch(item.value) {
			case 1:
				product = Intermediary.prototype._checkHamburger(item);
				break;
			case 2:
				product = Intermediary.prototype._checkHamburger(item);
				break;
			case 3:
				product = new Salad(Salad.CAESAR, count);
				break;
			case 4:
				product = new Salad(Salad.OLIVIER, count);
				break;
			case 5:
				product = new Drink(Drink.JUICE, count);
				break;
			case 6:
				product = new Drink(Drink.COFFEE, count);
				break;
		}

		order.addMenuItem(product);
	}

	return order;
};

Intermediary.prototype._checkHamburger = function(item) {
	var typeHamburger,
		typeStuffing;

	(item.value === 1) ? (typeHamburger = Hamburger.SIZE_SMALL) : (typeHamburger = Hamburger.SIZE_LARGE);

	switch(item.valueStuffing) {
		case 11:
			typeStuffing = Hamburger.STUFFING_CHEESE;
			break;
		case 12:
			typeStuffing = Hamburger.STUFFING_SALAD;
			break;
		case 13:
			typeStuffing = Hamburger.STUFFING_POTATO;
			break;
	}

	return new Hamburger(typeHamburger, typeStuffing, item.count);
};

export { 
	Intermediary
};	
	