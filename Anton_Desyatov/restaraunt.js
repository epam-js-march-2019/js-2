var Order = {
    items: [],
    calories: 0,
    price: 0,
    counter: -1,
    isPaid: false,

    addItems: function(){
        if(this.isPaid){
            return alert("Order has already been paid for and cannot be modified!");
        }

        var id = this.counter;
        var calories;
        var price;

        //Creating new hamburger if it was ordered
        if(document.getElementById("hamburger").checked){
                id = ++this.counter;
                var size;
                var stuffing;
            if(document.getElementById("smallHamburger").checked){
                size = "small";
                calories = Hamburger.SIZE_SMALL_CALORIES;
                price = Hamburger.SIZE_SMALL_PRICE;
            }
            else{
                size ="big";
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
                type = "Olivie";
            }
            else{
                calories = Salad.CAESAR_CALORIES;
                price = Salad.CAESAR_PRICE;
                type = "Caesar";
            }
            Array.prototype.slice.call(document.getElementsByName("weight")).map(function(curr){
                if(curr.checked){
                    console.log(+curr.value);
                    weight =+ +curr.value;

                    //Is it magical numbers if I try to calculate coefficents for weight proportions? ¯\_(ツ)_/¯

                    if(type === "Olivie"){
                        calories = Salad.OLIVIE_CALORIES * +curr.value / 100;
                        price = Salad.OLIVIE_PRICE * +curr.value / 100;
                    }
                    else{
                        calories = Salad.CAESAR_CALORIES * +curr.value / 100;
                        price = Salad.CAESAR_PRICE * +curr.value / 100;
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
                type = "Cola";
            }
            else{
                calories = Drink.COFFEE_CALORIES;
                price = Drink.COFFEE_CALORIES;
                type = "Coffee";
            }
            var drink = new Drink(calories,price,type,id);
            this.items.push(drink);

            //Creating drink html card and adding it to document
            this.addItemCard(drink);
        }
        this.calculateValues();
        Array.prototype.slice.call(document.getElementsByTagName('input')).map(function(curr){
            curr.checked = false;
        });

    },

    addItemCard: function(item){
        var Node = document.createElement("div");
        Node.setAttribute('class', 'itemCard');
        Node.setAttribute('id', item.id);
        Node.innerHTML += item.name;
        if(item.name === "Hamburger"){
            Node.innerHTML += "<p>" + "Size = " + item.size + "</p>";
            Node.innerHTML += "<p>" + "Stuffing is " + item.getStuffing() + "</p>";
        }
        if(item.name.includes("Salad")){
            Node.innerHTML += "<p>" + "Weight = " + item.weight + " gram" + "</p>";
        }
        Node.innerHTML += "<p>" + "Calories = " + item.getCalories() + " Price= " + item.getPrice()+ "</p>";
        Node.innerHTML += "<button class='deleteButton' onclick='order.removeItem(this.parentNode.id)'>delete</button>";
        document.getElementsByClassName("currentOrderList")[0].appendChild(Node);
    },

    removeItem: function(nodeId){
        console.log(nodeId);
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
            console.log(curr.getCalories());
            order.calories += curr.getCalories();
            order.price += curr.getPrice();
        });
        document.getElementsByClassName("totalWorth")[0].innerHTML="Калории заказа =" + order.calories +
            "\nЦена заказа =" + order.price;
    },

    finishOrder: function(){
        for(currProp in this){
            Object.defineProperty(this,currProp,{
                writable : false
            });
            console.log('Locked property ' + currProp);
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

function Hamburger(calories,price,size,stuffing,id) {
    this.name = "Hamburger";
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
    this.name ="Salad " + type;

    this.getWeight = function(){
        return this.weight;
    }
}

//Salad type price for 100 gram
Salad.CAESAR_PRICE = 100;
Salad.OLIVIE_PRICE = 50;
//Salad calories value
Salad.CAESAR_CALORIES = 20;
Salad.OLIVIE_CALORIES = 80;

//Drink type price
Drink.COLA_PRICE = 50;
Drink.COFFEE_PRICE = 80;
//Drink calories value
Drink.COLA_CALORIES = 40;
Drink.COFFEE_CALORIES = 20;

function Drink(calories, price, type, id) {
    this.calories = calories;
    this.price = price;
    this.type = type;
    this.name ="Drink " + type;
    this.id = id;
}

//Setting meals prototypes to acquire functions of Food
Hamburger.prototype = Object.create(Food.prototype);
Salad.prototype = Object.create(Food.prototype);
Drink.prototype = Object.create(Food.prototype);

var order = Object.create(Order);