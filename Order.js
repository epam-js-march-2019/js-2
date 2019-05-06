function Order() {

    this.id = 0;
    this.list = {};

    for (var i = 0; i < arguments.length; i++) {



        this.list[this.id] = arguments[i];
        this.id++;
    };

}


Order.prototype.getPrice = function() {

    var sum = 0;
    for (var item in this.list) {
        sum += this.list[item].getPrice();
    }
    return sum;

}


Order.prototype.getCalories = function() {

    var sum = 0;
    for (var item in this.list) {
        sum += this.list[item].getCalories();
    }
    return sum;

}


Order.prototype.addInOrder = function(item) {


    this.list[this.id] = item;
    this.id++;

}


Order.prototype.deleteFromOrder = function(id) {



    delete this.list[id];

}


Order.prototype.finish = function() {

    document.querySelectorAll('button').forEach(elem => {
        elem.disabled = true;
    });
}


