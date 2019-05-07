var Order = (function(){
    var instance;
    this.id = 0;
    this.list = {};
    this.isPaid = false;

    
    function Order(){
        if (!instance){
            instance = this;
        } else {
            return instance;
        }
    }


});

Order.prototype.getPrice = function() {

    var sum = 0;
    for (var item in this.list) {
        sum += this.list[item].getPrice();
    }
    return sum;
};
 
 
Order.prototype.getCalories = function() {
 
    var sum = 0;
    for (var item in this.list) {
        sum += this.list[item].getCalories();
    }
    return sum;
};

Order.prototype.getName = function(){
    return this.list[this.id].name;
}

Order.prototype.addItem = function(obj){
    this.list[this.id] = obj;
    this.id++;
};

Order.prototype.deleteItem = function(id){
    delete this.list[id];
};


