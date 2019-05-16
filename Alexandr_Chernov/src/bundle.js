"use strict";

import { CommonInit } from "./proj/common/common.js";

import { Form } from "./proj/form/form.js";

function proj(){};

proj.prototype.CommonInit = CommonInit;

proj.prototype.Form = Form;

export {
	proj
};
