var teaDrink = new Drink(drinkTypes.TYPE_TEA, 400);

var smallBurgerCheese = new Hamburger(
  hamburgerTypes.SIZE_SMALL,
  hamburgerTypes.STUFFING_CHEESE
);

var bigBurgerSalad = new Hamburger(
  hamburgerTypes.SIZE_LARGE,
  hamburgerTypes.STUFFING_SALAD
);

var saladCaesar = new Salad(saladTypes.TYPE_CAESAR, 400);
var saladOlivie = new Salad(saladTypes.TYPE_OLIVIE, 200);
// Additems to our order
var order = new Order();

order.addToOrder(smallBurgerCheese);
order.addToOrder(smallBurgerCheese);
order.addToOrder(bigBurgerSalad);
order.addToOrder(teaDrink);
order.addToOrder(saladCaesar);

// Check our order
console.log("### Check our order:");
console.log(order.getDishes());
console.log("total price of this order: " + order.calculateTotalPrice());
console.log("total calories of this order: " + order.calculateTotalCalories());

// Remove smallBurgerCheese from our order
order.deletePositionFromOrder(2);
console.log("### Delete smallBurgerCheese from our order, and check order:");
console.log(order.getDishes());

// Check our new price and calories
console.log("### Check our new total price and calories:");
console.log("New price of order: " + order.calculateTotalPrice());
console.log("New calories of order: " + order.calculateTotalCalories());

// Let's try to pay our order and add any item to it afterwards
// console.log("### Lets pay our order and add salad to it:")
// order.pay();
// order.addToOrder(saladCaesar);
// console.log(order.getDishes());

// Lets check size,stuffing price and cals of our burger
console.log("### Check size,stuffing price and cals of our burger:");
console.log("Size of smallBurgerCheese:  ", smallBurgerCheese.getSize());
console.log("Stuffing of bigBurgerSalad:  ", bigBurgerSalad.getStuffing());
console.log("Price of smallBurgerCheese: ", smallBurgerCheese.calculatePrice());
console.log(
  "Calories of bigBurgerSalad:  ",
  bigBurgerSalad.calculateCalories()
);
