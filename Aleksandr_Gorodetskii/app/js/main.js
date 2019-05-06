// (function() {
var itemList = document.querySelector(".item-list");
var controls = document.querySelector(".controls");

controls.addEventListener("click", function(e) {
  var targetAttr = e.target.getAttribute("data-item");
  console.log(targetAttr);
  switch (targetAttr) {
    case "smallBurgerCheese":
      addCurrentItem(
        "Small burger w/cheese",
        smallBurgerCheese.calculatePrice(),
        smallBurgerCheese.calculateCalories()
      );
      order.addToOrder(smallBurgerCheese);
      break;
    case "smallBurgerSalad":
      break;
  }
});

// Добавить название цену и калорийностьв ul
var addCurrentItem = function(name, price, cals) {
  var node = document.createElement("LI");
  var cancel = document.createElement("button");
  var textnode = document.createTextNode(
    name + ", price:" + price + "rup, calories: " + cals
  );
  node.appendChild(textnode);
  itemList.appendChild(node);
};
// })();
