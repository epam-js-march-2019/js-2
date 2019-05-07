var itemList = document.querySelector(".item-list");
var controls = document.querySelector(".controls");
var saladAmount = document.querySelector("#amount");
var purchase = document.querySelector(".purchase");
var summary = document.querySelector(".summary");
var hamburger = {};
var salad = {};
var drinks = {};

// Match target button, create proper Item, add Item to list and check total price and total calories
controls.addEventListener("click", function(e) {
  var targetAttr = e.target.getAttribute("data-item");

  switch (targetAttr) {
    case "smallBurgerCheese":
      createBurger(hamburgerTypes.SIZE_SMALL, hamburgerTypes.STUFFING_CHEESE);
      addCurrentItem(
        "Small burger w/cheese",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "smallBurgerSalad":
      createBurger(hamburgerTypes.SIZE_SMALL, hamburgerTypes.STUFFING_SALAD);
      addCurrentItem(
        "Small burger w/salad",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "smallBurgerPotato":
      createBurger(hamburgerTypes.SIZE_SMALL, hamburgerTypes.STUFFING_POTATO);
      addCurrentItem(
        "Small burger w/potato",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "bigBurgerCheese":
      createBurger(hamburgerTypes.SIZE_LARGE, hamburgerTypes.STUFFING_CHEESE);
      addCurrentItem(
        "Small burger w/cheese",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "bigBurgerSalad":
      createBurger(hamburgerTypes.SIZE_LARGE, hamburgerTypes.STUFFING_SALAD);
      addCurrentItem(
        "Small burger w/salad",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "bigBurgerPotato":
      createBurger(hamburgerTypes.SIZE_LARGE, hamburgerTypes.STUFFING_POTATO);
      addCurrentItem(
        "Small burger w/potato",
        hamburger.calculatePrice(),
        hamburger.calculateCalories()
      );
      break;
    case "Tea":
      createDrink(drinkTypes.TYPE_TEA);
      addCurrentItem(
        "Tea",
        drinks.calculatePrice(),
        drinks.calculateCalories()
      );
      break;
    case "Cola":
      createDrink(drinkTypes.TYPE_COLA);
      addCurrentItem(
        "Cola",
        drinks.calculatePrice(),
        drinks.calculateCalories()
      );
      break;
    case "Caesar":
      createSalad(saladTypes.TYPE_CAESAR, saladAmount.value);
      addCurrentItem(
        "Caesar",
        salad.calculatePrice(),
        salad.calculateCalories(),
        saladAmount.value
      );
      break;
    case "Olivie":
      createSalad(saladTypes.TYPE_OLIVIE, saladAmount.value);
      addCurrentItem(
        "Olivie",
        salad.calculatePrice(),
        salad.calculateCalories(),
        saladAmount.value
      );
      break;
  }
});

// Pay Button, inactive if order is empty. Freeze order after pay() method
purchase.addEventListener("click", function() {
  if (!!order.getDishes().length) {
    order.pay();
    purchase.innerHTML = "Purchased";
    purchase.classList.add("is-disabled");
  } else {
    summary.innerHTML = "Choose something first!";
  }
});

// Match 'delete' button and remove current item from list and order. Recheck values.
itemList.addEventListener("click", function(e) {
  var targetAttr = e.target;
  var li = e.target.closest("li");
  var nodes = Array.from(itemList.children);
  var index = nodes.indexOf(li);

  if ((targetAttr.className = "is-error")) {
    order.deletePositionFromOrder(index);
    e.target.parentNode.remove(e.target);
    checkValue();
  }
});

// Create DOM element
var addCurrentItem = function(name, price, cals, amount = 1) {
  var node = document.createElement("LI");
	var cancelBtn = document.createElement("button");
	
  var textnode = document.createTextNode(
    name +
      ", price: " +
      price +
      "tug, calories: " +
      cals +
      ", amount: " +
      amount
	);
	
  cancelBtn.classList.add("nes-btn", "is-error");
  cancelBtn.innerHTML = "X";
  node.appendChild(cancelBtn);
  node.appendChild(textnode);
  itemList.appendChild(node);
  checkValue();
  saladAmount.value = 0;
};

// Check value and rewrite Summary block
var checkValue = function() {
  var totalPrice = order.calculateTotalPrice();
  var totalCalories = order.calculateTotalCalories();

  summary.innerHTML =
    "Summary: " + totalPrice + " tug, " + totalCalories + " cals.";
};

function createBurger(type, stuffing) {
  hamburger = new Hamburger(type, stuffing);
  order.addToOrder(hamburger);

  return hamburger;
}

var createSalad = function(type, amount) {
  salad = new Salad(type, amount);
  order.addToOrder(salad);

  return salad;
};

var createDrink = function(type) {
  drinks = new Drink(type);
  order.addToOrder(drinks);

  return drinks;
};
