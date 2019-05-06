function MenuSectionWithSelection (name, constructor) {
  MenuSection.call(this, name, constructor);
  this.radioButtons=document.querySelectorAll("input[name*='radioButton-"+this.name+"']");
}

MenuSectionWithSelection.prototype = Object.create(MenuSection.prototype);
MenuSectionWithSelection.prototype.constructor = MenuSectionWithSelection;


MenuSectionWithSelection.prototype.handleEvent = function (button, parentNode) {
   var itemName=toConstantCase(parentNode.dataset.name); 
   var itemOption=toConstantCase(parentNode.querySelector('input:checked').value);
   var newOrderItem = new this.constructor(this.constructor[itemName], this.constructor[itemOption]);       
   this.addToOrderDependingOnButton (button, parentNode, newOrderItem, 1)
};

