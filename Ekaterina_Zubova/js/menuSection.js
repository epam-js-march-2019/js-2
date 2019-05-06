function MenuSection (name, constructor) {
  this.constructor=constructor;
  this.name=name;
  this.buttons=document.getElementsByName("button-"+this.name);
}

MenuSection.prototype.addButtonClickListeners = function () {
 var section = this;
 section.buttons.forEach(function (button) {
   button.addEventListener("click", function () {
     var parentNode=$(button).parents(".menu__item")[0];
     section.handleEvent(button, parentNode); 
   });
 })
};

MenuSection.prototype.handleEvent = function (button, parentNode) {
   var itemName=toConstantCase(parentNode.dataset.name); 
   var newOrderItem = new this.constructor(this.constructor[itemName]); 
   this.addToOrderDependingOnButton (button, parentNode, newOrderItem, 1)
};

MenuSection.prototype.addToOrderDependingOnButton = function (button, parentNode, orderItem, numberOfItems) {
     switch (button.value) 
     { 
       case "addToOrder":
         addToOrder (orderItem, numberOfItems, parentNode);
         break;
       case "increaseItems":
         order.addItem(orderItem, numberOfItems);
         changeOrder (orderItem, parentNode); 
         break;
       case "decreaseItems":
         order.deleteItem(orderItem, numberOfItems);
         changeOrder (orderItem, parentNode);  
         break;
     }
}