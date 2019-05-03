let orderArray = [],
    orderItemIndex = 0,
    total = [],
    sum = 0,
    kcal_sum=0;

function addOrderItem(name, price, kcal, amount) {
        let doc = document,
            elem = doc.createElement('li'),
            myList =doc.getElementById('order_list'),
            content = doc.createTextNode("Позиция: " + name + ". Цена: " + price + ". Ккал: " + kcal + ". Количество: " + amount + " "),
            newBtn = doc.createElement('button'),
            contentButton = doc.createTextNode('X');

        elem.appendChild(content);
        myList.appendChild(elem);
        elem.setAttribute('class', 'order_item');
        newBtn.appendChild(contentButton);
        myList.lastElementChild.appendChild(newBtn);

        let index = orderItemIndex++;
        newBtn.id = index;
        orderArray[index] = {
            index: index,
            price: price,
            kcal: kcal
    };
      total= resultSum(orderArray, index);
      newBtn.addEventListener('click', function () {
          myList.removeChild(elem);
          total = deleteButtonForTotalPrice(newBtn.id);
          doc.getElementById('sum_result').innerHTML = total.sum;
          doc.getElementById('kcal_result').innerHTML = total.kcal;
          if (total.sum ===0){
              clearPreviousState();
              document.getElementById('sum_result').innerHTML = "0";
              document.getElementById('kcal_result').innerHTML = "0";

          }
      });
      doc.getElementById('sum_result').innerHTML = total.sum;
      doc.getElementById('kcal_result').innerHTML = total.kcal;
}


function makeOrderButton() {
    let elem = document.getElementsByClassName('order_item');
    if (orderArray.length!=0){
        alert('Ваш заказ оплачен');
    while(elem[0]) {
        elem[0].parentNode.removeChild(elem[0]);
    }
    clearPreviousState();
    document.getElementById('sum_result').innerHTML = " ";
    document.getElementById('kcal_result').innerHTML = " ";}
    else {alert('Выберите, что заказать');}
}

function resultSum(obj, ind) {
       return {sum: sum += obj[ind].price,
       kcal: kcal_sum += obj[ind].kcal}
}

function deleteButtonForTotalPrice(id) {
    return {sum: total.sum = total.sum - orderArray[id].price,
kcal: total.kcal = total.kcal - orderArray[id].kcal}
}

function clearPreviousState() {
    orderArray = [];
    orderItemIndex = 0;
    total = [];
    sum = 0;
    kcal_sum=0;
}