function OrderSection () {
  this.section = document.getElementsByClassName('order')[0];
  this.table = document.getElementsByClassName('order__table')[0];
  this.payButton = document.getElementsByClassName("order__pay-button")[0];
  this.footer = document.getElementsByClassName('order__footer')[0];
}


OrderSection.prototype.addItem = function(item, number) {
  var newStr = document.createElement('tr');
  newStr.className="order__item";
  
  var addTagTd =function (innerHTML) {
    var newTag = document.createElement("td");
    newTag.innerHTML = innerHTML;
    newStr.appendChild(newTag);
  }
  
  addTagTd(item.name);
  addTagTd(item.getPrice());
  addTagTd(item.getCalories());
  addTagTd(number);
  addTagTd("<button class='order__delteItembutton'>Delete</button>");
  
  this.table.tBodies[0].appendChild(newStr);
};

OrderSection.prototype.changeNumberOfItems = function(item, numberOfItems) {
  var orderItems = [].slice.call(this.table.tBodies[0].rows);
  var row = orderItems.filter (function (orderItem) {
      return orderItem.cells[0].innerHTML==item.name;
  })[0];
  
  row.cells[1].innerHTML=item.price*numberOfItems;
  row.cells[2].innerHTML=item.calories*numberOfItems;
  row.cells[3].innerHTML=numberOfItems;
};

OrderSection.prototype.changeTotalParameters = function(order) {  
  this.footer.cells[1].innerHTML=order.price;
  this.footer.cells[2].innerHTML=order.calories;
  this.footer.cells[3].innerHTML=order.items.length;
};