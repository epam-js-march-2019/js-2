function ProductFactory(name, type, stuffing) {
	switch (name) {
		case 'hamb':
			return new Hamburger(type, stuffing);
		case 'salad':
			return new Salad(type,);
		case 'drink':
			return new Drink(type);
		default:
			console.error("Attempt to create unexisting product, aborting...");
	}
}