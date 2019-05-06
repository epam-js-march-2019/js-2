var MenuSections = [new MenuSection("drink", Drink), new MenuSectionWithSelection("hamburger", Hamburger), new MenuSectionWithField("salad", Salad)]

var order = new Order();

MenuSections.forEach (function (section) {
  section.addButtonClickListeners();
});

var orderSection = new OrderSection();

orderSection.payButton.addEventListener('click', function () {
	
});

function addToOrder (item, number, htmlElement) {
  order.addItem(item);
  orderSection.addItem(item, number);
  var changeButtons = htmlElement.getElementsByClassName("item__change-buttons")[0];
  if (changeButtons)
    changeButtons.className+=' item__change-buttons--visible'; /*???????*/
  var addButton = htmlElement.getElementsByClassName("item__add-button")[0];
  if (addButton)
    addButton.className+=' item__add-button--unvisible'; /*???????*/
  orderSection.changeTotalParameters(order);
}

function changeOrder (item, htmlElement) {
  var priceEl = htmlElement.getElementsByClassName('item__price')[0];
  var caloriesEl = htmlElement.getElementsByClassName('item__calories')[0];
  var numberOfItems=order.numberOfItems(item);
  priceEl.innerHTML = "Price: "+item.price*numberOfItems;
  caloriesEl.innerHTML = "Calories: "+item.calories*numberOfItems;
  orderSection.changeNumberOfItems(item, numberOfItems);
  orderSection.changeTotalParameters(order);
}