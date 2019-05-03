function addHamburgerButton(form, event) {
    event.preventDefault();
    let hamburger_type = form.elements['hamburger'].value;
    let hamburger_stuffing = form.elements['stuffing'].value;
    let hamburger_amount = form.elements['amountHamburgerField'].value;
    switch (hamburger_type) {
        case 'small':
            hamburger_type = Hamburger.SIZE_SMALL;
            break;
        case 'large':
            hamburger_type = Hamburger.SIZE_LARGE;
            break;
        default:
            return;
    }

    switch (hamburger_stuffing) {
        case 'stuffing_cheese':
            hamburger_stuffing = Hamburger.STUFFING_CHEESE;
            break;
        case 'stuffing_salad':
            hamburger_stuffing = Hamburger.STUFFING_SALAD;
            break;
        case 'stuffing_potato':
            hamburger_stuffing= Hamburger.STUFFING_POTATO;
            break;
        default:
            hamburger_stuffing = null;
    }

        let hamburger = new Hamburger(hamburger_type, hamburger_stuffing, hamburger_amount);
        addOrderItem(hamburger.getName(), hamburger.getPrice(), hamburger.getKcal(), hamburger.getAmount());
        form.reset();

}

function addSaladButton(form, event) {
    event.preventDefault();
    let salad_type = form.elements['salad'].value;
    let salad_amount = form.elements['amountSaladField'].value;
    switch (salad_type) {
        case 'caesar':
            salad_type = Salad.CAESAR;
            break;
        case 'russian_salad':
            salad_type = Salad.RUSSIAN_SALAD;
            break;
        default:
            return;
    }

    let salad = new Salad(salad_type, salad_amount);
    addOrderItem(salad.getName(), salad.getPrice(), salad.getKcal(), salad.getAmount());
    form.reset();

}

function addDrinksButton(form,event) {
    event.preventDefault();
    let drink_type = form.elements['drink'].value;
    let drink_amount = form.elements['amountDrinksField'].value;
    switch (drink_type) {
        case 'cola':
            drink_type = Drink.COLA;
            break;
        case 'coffee':
            drink_type = Drink.COFFEE;
            break;
        default:
            return;
    }

    let drink = new Drink(drink_type, drink_amount);
    addOrderItem(drink.getName(), drink.getPrice(), drink.getKcal(), drink.getAmount());
    form.reset();
}

