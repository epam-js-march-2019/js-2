const currentOrderParent = document.getElementById('pre-order');
const orderListParent = document.getElementById('done-order');
const shoppingCart = new ShoppingCart(currentOrderParent, orderListParent);
console.log(currentOrderParent);
console.log(orderListParent);
console.log(shoppingCart);

var foodBuilders = document.querySelectorAll('.food-builder');
foodBuilders.forEach(function(foodBuilder){
	foodBuilder.addEventListener('submit', function(e){
		e.preventDefault();
		var formData = new FormData(e.target);
		var finalOptions = Array.from(formData).reduce(function(intermediateOptions, formInput) {
			// formInput = ["type", "hamburger"];
			var key = formInput[0];
			var value = formInput[1];
			intermediateOptions[key] = value;
			return intermediateOptions;
		}, {});
		var foodObject = new FoodFactory().createFood(finalOptions);
		shoppingCart.addFoodItem(foodObject);
	});
});
