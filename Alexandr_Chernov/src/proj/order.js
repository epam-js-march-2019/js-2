'use strict';
	
function Order() {
		// Формирование массива с заказом
	this.args = [].slice.call(arguments);
		// Статус оплаты заказа
	this.paidStatus = false;
		// Текст ошибки при редактировании оплаченного заказа
	this.errorText = "Your order has already been paid";
};
	//===   ====================================
	//===   Методы для работы с заказом
	//===   ====================================

	// Получение информации по заказу
Order.prototype.getInfoOrder = function() {
	return this.args;
};
	
	// Получение статуса заказа
Order.prototype.getPaidStatus = function() {
	return this.paidStatus;
};
	
	/**
	 * Добавление пункта меню в заказ
	 * (в случае если заказ не оплачен)
	 */
Order.prototype.addMenuItem = function(item) {
	if (!this.paidStatus) {
		this.args.push(item);
	} else {
		console.log(this.errorText);
	}
};

	/**
	 * Удаление пункта меню из заказа
	 * (в случае если заказ не оплачен)
	 */
Order.prototype.removeMenuItem = function(item) {
	if (!this.paidStatus) {
		this.args.splice(this.args.indexOf(item), 1);
	} else {
		console.log(this.errorText);
	}
};
	
	// Оплата заказа
Order.prototype.pay = function() {
	if (!this.paidStatus) {
		this.paidStatus = true;
			// Предотвращаем добавление/удаление свойств
		Object.freeze(this);
	} else {
		console.log(this.errorText);
	}
};
	
	/* 
	 * Получение текущей стоимости заказа
	 *  - currentPrice: суммарная стоимость заказа
	 *  - item: объект заказа
	 */
Order.prototype.getCurrentPrice = function() {
	return this.args.reduce(function(currentPrice, item) {
		return currentPrice + item.getPrice();
	}, 0);
};

	// Получение текущей калорийности заказа
Order.prototype.getCurrentCalories = function() {
	return this.args.reduce(function(currentCalories, item) {
		return currentCalories + item.getCalories();
	}, 0);
};

export { 
	Order
};