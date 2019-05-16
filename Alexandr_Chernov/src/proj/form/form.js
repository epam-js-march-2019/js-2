'use strict';

import { Intermediary } from '../products/intermediary.js';

function Form() {};

var menuContainerItems = document.querySelector(".js-menu");

var buttonAddMenuItem = document.querySelector(".js-add-menu-item"),
	buttonGetPrice = document.querySelector(".js-get-price"),
	buttonGetCalories = document.querySelector(".js-get-calories"),
	buttonPay = document.querySelector(".js-pay");

Form.prototype.init = function() {
	Form.prototype._addMenuItem();
	Form.prototype._getPrice();
	Form.prototype._getCalories();
	Form.prototype._pay();

	Form.prototype._changeMenuItem();
};

	//===	========================
	//===	Buttons events
	//===	========================
	
	// Добавление новых пунктов в заказе
Form.prototype._addMenuItem = function() {	
	buttonAddMenuItem.addEventListener("click", function(e) {
			// для работы в ie8 и ниже
		e = e || window.event;
		e.preventDefault();

		var newMenuItem = document.createElement("div");
			newMenuItem.className = "form__item js-item";
			newMenuItem.innerHTML = '<div class="form__item-product"><select class="js-product"><option data-product="hamburger" value="1" selected="selected">Маленький гамбургер</option><option data-product="hamburger" value="2">Большой гамбургер</option><option data-product="salat" value="3">Салат цезарь</option><option data-product="salat" value="4">Салат Оливье</option><option data-product="drink" value="5">Кола</option><option data-product="drink" value="6">Кофе</option></select></div><div class="form__item-count"><div class="js-hamburger"><select class="js-hamburger-stuffing"><option value="11" selected="selected">Начинка с сыром</option><option value="12">Начинка с салатом</option><option value="13">Начинка с картофелем</option></select><label><span>сколько начинок, шт. ?</span><input class="js-count" type="number" min="1" value="1"></label></div><div class="js-salat is-hide"><label><span>вес, гр.</span><input class="js-count" type="number" min="50" value="50"></label></div><div class="js-drink is-hide"><label><span>количество, шт.</span><input class="js-count" type="number" min="1" value="1"></label></div></div><div class="form__item-delete"><button class="js-delete-item">Удалить</button></div>';

		menuContainerItems.appendChild(newMenuItem);

		Form.prototype._changeMenuItem();

		Form.prototype._checkMenu();
	});
};

Form.prototype._getPrice = function() {	
	buttonGetPrice.addEventListener("click", function(e) {
		e = e || window.event;
		e.preventDefault();

		var products = Form.prototype._getCurrentMenuItems(),
			price = Intermediary.prototype.getCurrentPrice(products);

		alert("Цена заказа составляет: " + price + " тугриков");
	});
};

Form.prototype._getCalories = function() {	
	buttonGetCalories.addEventListener("click", function(e) {
		e = e || window.event;
		e.preventDefault();

		var products = Form.prototype._getCurrentMenuItems(),
			calories = Intermediary.prototype.getCurrentCalories(products);

		alert("Калорийность продукта: " + calories + " калорий");

	});
};

Form.prototype._pay = function() {	
	buttonPay.addEventListener("click", function(e) {
		e = e || window.event;
		e.preventDefault();

		var products = Form.prototype._getCurrentMenuItems(),
			infoOrder = Intermediary.prototype.pay(products);

		console.log(infoOrder)

		document.getElementsByClassName("js-add-menu-item")[0].disabled = true;
		document.getElementsByClassName("js-get-price")[0].disabled = true;
		document.getElementsByClassName("js-get-calories")[0].disabled = true;
		document.getElementsByClassName("js-pay")[0].disabled = true;

		alert("Заказ оплачен. Спасибо!");
	});
};

	//===	========================
	//===	Common methods
	//===	========================	

Form.prototype._getCurrentMenuItems = function() {	
	var items = menuContainerItems.getElementsByClassName("js-item"),
		arr = [];

	for(var i = 0; i < items.length; i++) {
		var item = items[i],
			selectMenu = item.getElementsByClassName("js-product")[0],
			selectOption = selectMenu.selectedOptions[0],
			dataProduct = selectOption.getAttribute("data-product"),
			value = selectOption.value,
			product;

		switch(dataProduct) {
			case "hamburger":
				product = Form.prototype._getParamsHamburger(item, value);
				break;
			case "salat":
				product = Form.prototype._getValue(item, "js-salat", value);
				break;
			case "drink":
				product = Form.prototype._getValue(item, "js-drink", value);
				break;
		}

		arr.push(product);
	}

	return arr;
};

Form.prototype._getParamsHamburger = function(item, value) {
	var typeHamburger = item.getElementsByClassName("js-hamburger")[0],
		selectStuffing = typeHamburger.getElementsByClassName("js-hamburger-stuffing")[0],
		valueStuffing = selectStuffing.selectedOptions[0].value,
		count = typeHamburger.getElementsByClassName("js-count")[0].value;

	return {
		value: +value,
		valueStuffing: +valueStuffing,
		count: +count
	};
};

Form.prototype._getValue = function(item, classProduct, value) {
	var count = item.getElementsByClassName(classProduct)[0].getElementsByClassName("js-count")[0].value;

	return {
		value: +value,
		count: +count
	};
};

	//===	========================
	//===	Events elements
	//===	========================
	
	// Навешивание базовых обработчиков
Form.prototype._changeMenuItem = function() {	
	var elements = document.getElementsByClassName('js-item');

	for(var i = 0; i < elements.length; i++) {
		var item = elements[i],
			products = item.getElementsByClassName("js-product")[0],
			deleteButton = item.getElementsByClassName("js-delete-item")[0];

			// Блокируем повторное навешивание обработчика
		if(!products.eventListenerList) {
			Form.prototype._addEventSelectMenuItem(products);
		}

		if(!deleteButton.eventListenerList) {
			Form.prototype._addEventDeleteButton(deleteButton);
		}
	}
};
	
	// Меняем блоки с выбором количества/веса/начинок в зависимости от типа пункта меню
Form.prototype._addEventSelectMenuItem = function(element) {	
	element.addEventListener("change", function(e) {
		e = e || window.event;

		var obj = this,
			option = e.target.selectedOptions[0],
			dataProduct = option.getAttribute("data-product"),
			countProducts = obj.parentNode.nextElementSibling.children;

		for(var i = 0; i < countProducts.length; i++) {
			var item = countProducts[i],
				classList = item.classList;

			if (classList.contains("js-"+dataProduct)) {
				classList.remove("is-hide");
			} else {
				classList.add("is-hide");
			}
		}
	});
};
	
	// Удаление пункта меню из заказа
Form.prototype._addEventDeleteButton = function(element) {	
	element.addEventListener("click", function(e) {
		e = e || window.event;
		e.preventDefault();

		var obj = e.target,
			item = obj.parentNode.parentNode;

		item.remove();

		Form.prototype._checkMenu();
	});
};

Form.prototype._checkMenu = function(element) {
	var elements = document.getElementsByClassName('js-item'),
		emptyElement = document.getElementsByClassName('js-empty')[0];

	if(!elements.length) {
		emptyElement.classList.add("is-active");
	} else {
		emptyElement.classList.remove("is-active");
	}
};

export { 
	Form
};