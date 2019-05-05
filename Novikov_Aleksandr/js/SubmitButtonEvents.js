/*
* Submit button and modal behavior
 */
const submit = document.querySelector('#submit-order');
submit.addEventListener('click', onSubmitOrder);

const modal = document.querySelector('#order-submitted');
modal.addEventListener('click', () => {modal.style.display = 'none'});

function onSubmitOrder(event) {
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

	/* Show modal */
	modal.style.display = 'block';
	setTimeout(()=> modal.style.display = 'none', 3000);
}