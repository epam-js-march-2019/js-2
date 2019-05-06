// var foodBuilders = document.getElementsByClassName('food-builder');
var foodBuilders = document.querySelectorAll('.food-builder');
console.log(foodBuilders);

var preOrder = {
	id: "current",
	items: []
};

var preOrderParent = document.getElementById('pre-order');


var updatePreOrderArray = function(food){
	preOrder.items.push(food);
	preOrderParent.innerHTML = addOrder(preOrder, 'Click for removing positions');
}

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

		//TODO: extract 
		var foodObject = new FoodFactory().createFood(finalOptions);

		updatePreOrderArray(foodObject);
	});
});

