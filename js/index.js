
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
};

function ready() {
    var addToCartButtons = document.getElementsByClassName('add-to-cart-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-pay')[0].addEventListener('click', makePaymentClicked);
    document.getElementsByClassName('btn-empty')[0].addEventListener('click', emptyCartClicked);
};

// Creates an empty cart object

var userCart = new UserCart();


// Event handlers

function addToCartClicked(event) {
    if (!userCart.getPaymentStatus()) {
        var buttonClicked = event.target
        var productName = buttonClicked.name.charAt(0).toUpperCase() + buttonClicked.name.slice(1);
        var productType = buttonClicked.getAttribute("data-type").toUpperCase();
        var productStuffing = (buttonClicked.getAttribute("data-stuffing")) ? buttonClicked.getAttribute("data-stuffing").toUpperCase() : '';
        var productQuantity = buttonClicked.parentElement.getElementsByTagName('input')[0].value;  
        
        // Selects product specific constructor 
        var constructors = {
        'Hamburger': Hamburger, 
        'Drink': Drink,
        'Salad': Salad
        }

        var cartPositionConstr = constructors[productName];   
        var cartPosition = new cartPositionConstr(cartPositionConstr[productType], productQuantity, cartPositionConstr[productStuffing]);
        
        userCart.addToCart(cartPosition);
        addRowToCardView(cartPosition);

        updateCartViewTotals();
    } else {
        alert('You cannot edit the order after it has been paid.');
    }

};

function deleteFromCartClicked(event) {
    if (!userCart.getPaymentStatus()) {
        var buttonClicked = event.target;
        var cartPositionIndex = buttonClicked.parentNode.parentNode.rowIndex; // index of the row in the html table including header row
        
        userCart.deleteFromCart(cartPositionIndex - 1); // adjustment for header row
        deleteRowFromCartView(cartPositionIndex);

        updateCartViewTotals();
    } else {
        alert('You cannot edit the order after it has been paid.');
      }  
};

function emptyCartClicked(event) {    
    userCart.emptyCart();
    emptyCartView();

    updateCartViewTotals();  
};

function makePaymentClicked(event) {
    if (userCart.getPaymentStatus()) {
        alert('Payment for the order has been made already.');
    } else {
        userCart.makePayment();
        (userCart.getPaymentStatus()) ? alert('Payment has been made successfully. Thank you for your order!') : alert('Something went wrong. Please try again later'); 
    }
};


//  Methods to manipulate html view of the cart

//  Adds a new row to the html table containing cart view

function addRowToCardView(cartItem) {   
    var productName = cartItem.name;
    var productEnergyValue = cartItem.calculateCalories() + ' kcal';
    var productQuantity = cartItem.quantity;
    var productPrice = cartItem.calculatePrice() + ' MNT';
    var productSubtotal = cartItem.calculateSubtotal() + ' MNT';

    var orderTable = document.getElementById('order-table')
    orderTable.innerHTML+= '<tr><td class="item-description">'+ productName +'</td><td class="item-energy">' + productEnergyValue + '</td><td class="item-quantity">'+ productQuantity + '</td><td class="item-price">' + productPrice + '</td><td class="item-price">' + productSubtotal + '</td><td class="item-delete"><button class="btn btn-delete-item" type="button">×</button></tr>';
    
    addDeleteItemListeners();
};

//  Adds listeners to each delete-from-cart button  

function addDeleteItemListeners() {
  	var deleteCartItemButtons = document.getElementsByClassName('btn-delete-item');
      for (var i = 0; i < deleteCartItemButtons.length; i++) {
          var button = deleteCartItemButtons[i];
          button.addEventListener('click', deleteFromCartClicked);
      } 
};

//  Deletes a row from the html table containing cart view

function deleteRowFromCartView(cartPositionIndex) {
    var orderTable = document.getElementById('order-table'); 
    orderTable.deleteRow(cartPositionIndex);
};

// Empties the html table containing cart view

function emptyCartView() {
    var orderTable = document.getElementById('order-table');
    for (var i = orderTable.rows.length - 1; i > 0; i--) {
          orderTable.deleteRow(i);
    }     
};  

// Updates cart totals in the cart view

function updateCartViewTotals() {
    var totalAmount = userCart.calculateTotalOrderValue();
    var totalEnergy = userCart.calculateTotalEnergyValue();

    document.getElementById('totalAmount').innerText = totalAmount + ' MNT';
    document.getElementById('totalEnergy').innerText = totalEnergy + ' kcal';
};