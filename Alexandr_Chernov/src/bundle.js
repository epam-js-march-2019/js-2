"use strict";

import { Hamburger } from "./proj/products/hamburger.js";
import { Salad } from "./proj/products/salad.js";
import { Drink } from "./proj/products/drink.js";

import { Order } from "./proj/order.js";

function proj(){};

proj.prototype.Hamburger = Hamburger;
proj.prototype.Salad = Salad;
proj.prototype.Drink = Drink;

proj.prototype.Order = Order;

export {
	proj
};
