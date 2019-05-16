'use strict';
	
	// Добавление поля eventListenerList каждому элементу
function CommonInit() {
	Element.prototype._addEventListener = Element.prototype.addEventListener;
	Element.prototype.addEventListener = function(a,b,c) {
		this._addEventListener(a,b,c);
		if(!this.eventListenerList) this.eventListenerList = {};
		if(!this.eventListenerList[a]) this.eventListenerList[a] = [];
		this.eventListenerList[a].push(b);
	};
};

export { 
	CommonInit
};