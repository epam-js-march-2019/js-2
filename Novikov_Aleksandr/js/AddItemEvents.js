/*
* Fields for hamburger
 */
/* values: [small, big] */
const hambCheese = document.querySelector('#hamb-cheese');
const hambLettuce = document.querySelector('#hamb-lettuce');
const hambPotatoes = document.querySelector('#hamb-potatoes');
const hambAmount = document.querySelector('#hamb-amount');

/*
* Fields for salad
 */
/* values: [caesar, russianSalad] */
const saladAmount = document.querySelector('#salad-amount');

/*
* Fields for drink
 */
/* values: [cola, coffee] */
const drinkAmount = document.querySelector('#drink-amount');

/*
* Event listeners for clicking 'Add' buttons
 */
document.querySelector('#hamb button').addEventListener('click', hambAdded);
document.querySelector('#salad button').addEventListener('click', saladAdded);
document.querySelector('#drink button').addEventListener('click', drinkAdded);


function hambAdded(event) {
	event.preventDefault();
	const hambType = document.querySelector('input[name="hamb-type"]:checked');
	const hambStuffing = {
		'cheese': hambCheese.checked,
		'lettuce': hambLettuce.checked,
		'potatoes': hambPotatoes.checked,
	};
	cart.add('hamb', hambType.value, hambAmount.value, hambStuffing);
}
function saladAdded(event) {
	event.preventDefault();
	const saladType = document.querySelector('input[name="salad-type"]:checked');
	cart.add('salad', saladType.value, saladAmount.value);
}
function drinkAdded(event) {
	event.preventDefault();
	const drinkType = document.querySelector('input[name="drink-type"]:checked');
	cart.add('drink', drinkType.value, drinkAmount.value);
}