var Order = {
    items: [],
    calories: 0,
    price: 0,
    counter: -1,

    addItems: function(){

        var id = this.counter;
        var calories;
        var price;

        //Creating new hamburger if it was ordered
        if(document.getElementById("hamburger").checked){
                id = ++this.counter;
                var size;
                var stuffing;
            if(document.getElementById("smallHamburger").checked){
                size = Hamburger.SIZE_SMALL;
                calories = Hamburger.SIZE_SMALL_CALORIES;
                price = Hamburger.SIZE_SMALL_PRICE;
            }
            else{
                size =Hamburger.SIZE_BIG;
                calories = Hamburger.SIZE_BIG_CALORIES;
                price = Hamburger.SIZE_BIG_PRICE;
            }

            //Getting stuffing

            Array.prototype.slice.call(document.getElementsByName("stuffing")).map(function(curr){
                if(curr.checked){
                    stuffing = curr.value;
                    calories += Hamburger[stuffing + "_CALORIES"];
                    price += Hamburger[stuffing + "_PRICE"];
                }
            });
            var hamburger = new Hamburger(calories,price,size,stuffing,id);
            this.items.push(hamburger);

            //Creating hamburger html card and adding it to document
            this.addItemCard(hamburger);
        }

        //Creating new salad if it was ordered
        if(document.getElementById("salad").checked){
            var weight;
            var type;
            id = ++this.counter;
            if(document.getElementById("saladOlivie").checked){
                calories = Salad.OLIVIE_CALORIES;
                price = Salad.OLIVIE_PRICE;
                type = Salad.TYPE_OLIVIE;
            }
            else{
                calories = Salad.CAESAR_CALORIES;
                price = Salad.CAESAR_PRICE;
                type = Salad.TYPE_CAESAR;
            }

            Array.prototype.slice.call(document.getElementsByName("weight")).map(function(curr){
                if(curr.checked){
                    weight =+ +curr.value;

                    if(type === Salad.TYPE_OLIVIE){
                        calories = Salad.OLIVIE_CALORIES * +curr.value / Salad.DEFAULT_WEIGHT;
                        price = Salad.OLIVIE_PRICE * +curr.value / Salad.DEFAULT_WEIGHT;
                    }
                    else{
                        calories = Salad.CAESAR_CALORIES * +curr.value / Salad.DEFAULT_WEIGHT;
                        price = Salad.CAESAR_PRICE * +curr.value / Salad.DEFAULT_WEIGHT;
                    }
                }
            });
            var salad = new Salad(calories,price,weight,type,id);
            this.items.push(salad);

            //Creating salad html card and adding it to document
            this.addItemCard(salad);
        }

        //Creating new drink if it was ordered
        if(document.getElementById("drink").checked){
            id = ++this.counter;
            if(document.getElementById("drinkCola").checked){
                calories = Drink.COLA_CALORIES;
                price = Drink.COLA_PRICE;
                type = Drink.TYPE_COLA;
            }
            else{
                calories = Drink.COFFEE_CALORIES;
                price = Drink.COFFEE_CALORIES;
                type = Drink.TYPE_COFFEE;
            }
            var drink = new Drink(calories,price,type,id);
            this.items.push(drink);

            //Creating drink html card and adding it to document
            this.addItemCard(drink);
        }
        //Calculating values of all items in order
        this.calculateValues();
        //Resetting all inputs after adding items
        Array.prototype.slice.call(document.getElementsByTagName('input')).map(function(curr){
            switch (curr.id){
                case "smallHamburger":
                    curr.checked = true;
                    break;
                case "100g":
                    curr.checked = true;
                    break;
                case "drinkCola":
                    curr.checked = true;
                    break;
                default:
                    curr.checked = false;
            }

        });
    },

    addItemCard: function(item){
        var Node = document.createElement("div");
        Node.setAttribute('class', 'itemCard');
        Node.setAttribute('id', item.getId());
        Node.innerHTML += item.getName();
        if(item.name === "Hamburger"){
            Node.innerHTML += "<p>" + "Size=" + item.getSize() + "</p>";
            Node.innerHTML += "<p>" + "Stuffing is " + item.getStuffing() + "</p>";
        }
        if(item.name.includes("Salad")){
            Node.innerHTML += "<p>" + "Weight=" + item.getWeight() + " gram" + "</p>";
        }
        Node.innerHTML += "<p>" + "Calories = " + item.getCalories() + " Price=" + item.getPrice()+ "</p>";
        Node.innerHTML += "<button class='deleteButton' onclick='order.removeItem(this.parentNode.id)'>delete</button>";
        document.getElementsByClassName("currentOrderList")[0].appendChild(Node);
    },

    removeItem: function(nodeId){
        for(var i = 0; i<this.items.length;i++){
            if(this.items[i].id === +nodeId){
                this.items.splice(i,1);
                break;
            }
        }

        document.getElementById(nodeId).remove();
        this.calculateValues();
    },

    calculateValues: function(){
        this.calories = 0;
        this.price = 0;
        this.items.forEach(function(curr){
            order.calories += curr.getCalories();
            order.price += curr.getPrice();
        });
        document.getElementsByClassName("totalWorth")[0].innerHTML=Order.CALORIES + order.calories +
            "\n" + Order.PRICE + order.price;
    },

    finishOrder: function(){
        for(currProp in this){
            Object.defineProperty(this,currProp,{
                writable : false
            });
        }
        this.paid = true;
        document.getElementById('addToOrder').disabled = true;
        Array.prototype.slice.call(document.getElementsByClassName('deleteButton')).forEach(function(curr){curr.disabled = true;})
    }
};

//Superclass that contains get methods
function Food(){
}

Food.prototype.getPrice = function(){
    return this.price;
};
Food.prototype.getCalories = function(){
    return this.calories;
};

Food.prototype.getName = function(){
    return this.name;
};

Food.prototype.getId = function(){
    return this.id;
};

Order.CALORIES = "Калории заказа = ";
Order.PRICE = "Цена заказа =";

    function Hamburger(calories,price,size,stuffing,id) {
    this.name = Hamburger.NAME;
    this.size = size;
    this.calories = calories;
    this.price = price;
    this.stuffing = stuffing;
    this.id = id;

    this.getSize = function(){
        return this.size;
    };

    this.getStuffing = function(){
        if(this.stuffing !== undefined) {
            return this.stuffing;
        }
        else{
            return "nothing";
        }
    }
}

Hamburger.NAME = "Hamburger";
Hamburger.SIZE_SMALL = "small";
Hamburger.SIZE_BIG = "big";
//Hamburger sizing price
Hamburger.SIZE_SMALL_PRICE = 50;
Hamburger.SIZE_BIG_PRICE = 100;
//Hamburger stuffing price
Hamburger.STUFF_CHEESE_PRICE = 10;
Hamburger.STUFF_SALAD_PRICE =  20;
Hamburger.STUFF_POTATO_PRICE = 15;
//Hamburger sizing calories
Hamburger.SIZE_SMALL_CALORIES = 20;
Hamburger.SIZE_BIG_CALORIES = 40;
//Hamburger stuffing calories
Hamburger.STUFF_CHEESE_CALORIES = 20;
Hamburger.STUFF_SALAD_CALORIES = 5;
Hamburger.STUFF_POTATO_CALORIES = 10;

function Salad(calories,price,weight,type,id) {
    this.weight = weight;
    this.calories = calories;
    this.price = price;
    this.id = id;
    this.type = type;
    this.name =Salad.NAME + type;

    this.getWeight = function(){
        return this.weight;
    }
}

Salad.NAME = "Salad ";
Salad.TYPE_OLIVIE = "Olivie";
Salad.TYPE_CAESAR = "Caesar";
//Salad type price for 100 gram
Salad.CAESAR_PRICE = 100;
Salad.OLIVIE_PRICE = 50;
//Salad calories value
Salad.CAESAR_CALORIES = 20;
Salad.OLIVIE_CALORIES = 80;
//Default weight value
Salad.DEFAULT_WEIGHT = 100;

function Drink(calories, price, type, id) {
    this.calories = calories;
    this.price = price;
    this.type = type;
    this.name =Drink.NAME + type;
    this.id = id;
}

Drink.NAME = "Drink ";
Drink.TYPE_COLA = "Cola";
Drink.TYPE_COFFEE = "Coffee";
//Drink type price
Drink.COLA_PRICE = 50;
Drink.COFFEE_PRICE = 80;
//Drink calories value
Drink.COLA_CALORIES = 40;
Drink.COFFEE_CALORIES = 20;
//Setting meals prototypes to acquire functions of Food
Hamburger.prototype = Object.create(Food.prototype);
Salad.prototype = Object.create(Food.prototype);
Drink.prototype = Object.create(Food.prototype);

var order = Object.create(Order);