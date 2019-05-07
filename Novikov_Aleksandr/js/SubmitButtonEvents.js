/*
* Submit button and successModal behavior
 */
const submit = document.querySelector('#submit-order');
submit.addEventListener('click', onSubmitOrder);

const successModal = document.querySelector('#order-submitted');
successModal.addEventListener('click', () => {successModal.style.display = 'none'});
const errorModal = document.querySelector('#cart-empty');
errorModal.addEventListener('click', () => {errorModal.style.display = 'none'});

function onSubmitOrder(event) {
	/* If no products added */
	if ( !(Object.keys(cart.products).length) ) {
		errorModal.style.display = 'block';
		setTimeout(()=> errorModal.style.display = 'none', 5000);
		return;
	}

	/* Disable inputs */
	const inputs = Array.from(document.querySelectorAll('input'));
	const buttons = Array.from(document.querySelectorAll('button'));
	const items = inputs.concat(buttons);
	items.forEach((item) => item.disabled = true);

	/* Replace submit buttow with make new order button */
	submit.removeEventListener('click', onSubmitOrder);
	submit.innerHTML = "Make New Order";
	submit.addEventListener('click', ()=> location.reload());
	submit.disabled = false;

	/* Show successModal */
	successModal.style.display = 'block';
	setTimeout(()=> successModal.style.display = 'none', 3000);
}