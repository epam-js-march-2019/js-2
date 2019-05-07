"use strict";

import { proj } from './bundle';

var Proj = new proj();

var Hamburger = Proj.Hamburger,
	Salad = Proj.Salad,
	Drink = Proj.Drink,
	Order = Proj.Order;

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
	
	/** 
	 * Формирование пунктов заказа:
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
var bigHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO),
	smallHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD),
	caesarSalad = new Salad(Salad.CAESAR, 50),
	olivierSalad = new Salad(Salad.OLIVIER, 150),
	juice = new Drink(Drink.JUICE);

	// Формирование заказа
var order = new Order(bigHamburger, smallHamburger, caesarSalad, olivierSalad, juice);
	
	// Получение текущей стоимости заказа
console.log(order.getCurrentPrice());
	
	// Получение текущей калорийности заказа
order.getCurrentCalories();
	
	// Удаление пункта меню из заказа
order.removeMenuItem(olivierSalad);
	
	// Добавление пункта меню с заказом
order.addMenuItem(caesarSalad);

	// Получение текущего заказа
order.getInfoOrder();
	
	// Оплата заказа
order.pay();
