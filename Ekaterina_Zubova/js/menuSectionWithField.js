function MenuSectionWithField (name, constructor) {
  MenuSection.call(this, name, constructor);
  this.inputTypeNumber=document.querySelectorAll("input[name*='inputTypeNumber-"+this.name+"']");
}

MenuSectionWithField.prototype = Object.create(MenuSection.prototype);
MenuSectionWithField.prototype.constructor = MenuSectionWithField;

MenuSectionWithField.prototype.handleEvent = function (button, parentNode) {  
   var numberOfItems = parentNode.getElementsByTagName("input")[0].valueAsNumber;
   var itemName=toConstantCase(parentNode.dataset.name); 
   var newOrderItem = new this.constructor(this.constructor[itemName], numberOfItems);
   addToOrder (newOrderItem, numberOfItems, parentNode);
};