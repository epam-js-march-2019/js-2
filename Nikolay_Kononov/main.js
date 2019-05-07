var addBurger = document.getElementById('addBurger');
var addDrink = document.getElementById('addDrink');
var addSalad = document.getElementById('addSalad');
var weight = document.getElementById('gramms');
var order = document.getElementById('order');
var sum = document.getElementById('sum');
var kcal = document.getElementById('kcal');
var pay = document.getElementById('pay');

removeItem = [];



var fullOrder =  new Order();


addBurger.addEventListener('click', function getCheckedBurgers() {

    if(!fullOrder.isPaid){ 
        var stufflingRadio = document.getElementsByClassName('stuffling');
        var stufflingRadioChecked;

        for (var i = 0; i < stufflingRadio.length; i++) {
            if (stufflingRadio[i].checked) {
                stufflingRadioChecked = stufflingRadio[i].value; 
            }
        }

        var sizeRadio = document.getElementsByClassName('size');
        var sizeRadioChecked;

        for (var j = 0; j < sizeRadio.length; j++){
            if (sizeRadio[j].checked){
                sizeRadioChecked = sizeRadio[j].value;
            }
        }
        
        newHam = new Hamburger(eval(sizeRadioChecked), eval(stufflingRadioChecked));
        fullOrder.addItem(newHam);

        createEl();

        sum.innerHTML = "Цена: " + fullOrder.getPrice();
        kcal.innerHTML =  "Калории: " + fullOrder.getCalories();
        

    } else {
        alert("Заказ уже оплачен!");
    }

});



addDrink.addEventListener('click', function getCheckedDrinks() {

    if(!fullOrder.isPaid){ 
        var drinkRadio = document.getElementsByClassName('drinks');
        var drinkRadioChecked;

        for (var i = 0; i < drinkRadio.length; i++) {
            if (drinkRadio[i].checked){
                drinkRadioChecked = drinkRadio[i].value;
            }
        }
        
        drink = new FoodFactory();
        newDrink = drink.addDrink(drinkRadioChecked);
        fullOrder.addItem(newDrink);
        createEl();   
        sum.innerHTML = "Цена: " + fullOrder.getPrice();
        kcal.innerHTML =  "Калории: " + fullOrder.getCalories();

    } else {
        alert("Заказ уже оплачен!");
    }
});
    


addSalad.addEventListener('click', function getCheckedSalads() {

    if(!fullOrder.isPaid){ 
        var saladRadio = document.getElementsByClassName('salad');
        var saladRadioChecked;

        for (var i = 0; i < saladRadio.length; i++) {
            if (saladRadio[i].checked){
                saladRadioChecked = saladRadio[i].value;
            }
        }


        gramms = weight.value;
        newSalad = new Salad(eval(saladRadioChecked), eval(gramms));
        fullOrder.addItem(newSalad);
        
        createEl();

        sum.innerHTML = "Цена: " + fullOrder.getPrice();
        kcal.innerHTML =  "Калории: " + fullOrder.getCalories();
    } else {
        alert("Заказ уже оплачен!");
    }
    
});

pay.addEventListener('click', function payOrder() {
    if (fullOrder.id == 0){
        alert("Сделайте заказ!");
    } else {
        if (!fullOrder.isPaid){
            fullOrder.isPaid = true;
            pay.innerHTML= "get money back";
        } else {
            pay.innerHTML= "pay";
            fullOrder.isPaid = false;
        }
    }
});


    function createEl(){
            
            
        var orderPoint = document.createElement("li");
        orderPoint.appendChild(document.createTextNode(fullOrder.list[fullOrder.id-1].getName()));
        orderPoint.setAttribute('id', fullOrder.id-1);
        order.appendChild(orderPoint);

        var deleteButton = document.createElement('a');
        deleteButton.setAttribute('href', '#');
        deleteButton.innerHTML = 'Удалить';
        orderPoint.appendChild(deleteButton); 
        removeItem.push(document.getElementById(fullOrder.id-1));

        deleteButton.addEventListener('click', function deleteItem() {
            if(!fullOrder.isPaid){
                removeItem[fullOrder.id-1].parentElement.removeChild(removeItem[fullOrder.id-1]);
                removeItem.splice(fullOrder.id-1, 1);
                fullOrder.deleteItem(fullOrder.id-1);
                fullOrder.id--;
                sum.innerHTML = "Цена: " + fullOrder.getPrice();
                kcal.innerHTML =  "Калории: " + fullOrder.getCalories();
            } else {
                alert("Заказ уже оплачен!");
            }
            });
        
    }