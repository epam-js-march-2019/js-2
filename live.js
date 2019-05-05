$(function() {

    var btnBurger = $("#btn_burger");
    var bigBtn = $("#big-burger");
    var noteList = $("#notes");
    var template = noteList.html();
    var f = $("#first");
    var colaBtn = $('#drink-cola-btn');
    var cofeeBtn = $('#drink-coffee-btn');
    var buy =$('#total');
    var oliveBtn = $('#btn__olive');
    var caesarBtn = $('#btn__caesar');
    var dltPosition = $('#dltP');


    btnBurger.click(function() {
      var elem =  $('<p></p>');
      var stuff = $('.ham-staff-small input:checked').val();
      var newHam = new Hamburger("small",stuff);
      elem.text("Small Hamburger" + ' ... ' + newHam.price + " Туг." + " with " + newHam.stiffing);
      f.append(elem);
        console.log(Order.items);
    });
    dltPosition.click( function () {
        var lastArr = Order.items;
        var lastItem = lastArr[lastArr.length-1];
        console.log(lastArr);
        console.log(lastItem);
        var lastKcal = lastItem.kcal;
        var lastPrice = lastItem.price;
        Order.totalKcal -=lastKcal;
        Order.totalPrice -= lastPrice;
        Order.items.splice(0,1);
        f.children().last().remove();
        console.log(Order);
    })


    bigBtn.click(function() {
        var elemB = $('<p></p>');
        var stuffBig = $('.ham-staff-big input:checked').val();
        var newHam_big = new Hamburger("big",stuffBig);
        elemB.text("Big Hamburger" + ' ... ' + newHam_big.price + " Туг." + " with " + newHam_big.stiffing);
        f.append(elemB);

    });
    
    oliveBtn.click(function () {
        var elemO = $('<p></p>');
        var gr = $('.salad-stuff').val();
        var newSalad = new Salad("olive",gr);
        elemO.text("Salad" + " ... " + newSalad.type + " " + newSalad.price + " Туг.");
        f.append(elemO);
    });

    caesarBtn.click(function () {
        var elemCaesar = $('<p></p>');
        var grC = $('.salad-stuff').val();
        var newSalad = new Salad("caesar",grC);
        elemCaesar.text("Salad" + " ... " + newSalad.type + " " + newSalad.price + " Туг.");
        f.append(elemCaesar);
    });

    colaBtn.click(function () {
        var elemD = $('<p></p>');
        var newDr = new Drink("cola");
        elemD.text("Cola" + ' ... ' + newDr.price + " Туг.");
        f.append(elemD);
    });
    cofeeBtn.click(function () {
        var elemC = $('<p></p>');
        var newDr = new Drink("coffee");
        elemC.text("Coffee" + ' ... ' + newDr.price + " Туг.");
        f.append(elemC);
    });
    buy.click(function () {
        var elemTotal = $('<p></p>');
        var line = $('<hr>');
        f.append(line);
        elemTotal.text("Total check: " + Order.totalPrice + " Tyg., " + Order.totalKcal + " Kcal.");
        f.append(elemTotal);
        buy.prop("disabled",true);
        btnBurger.prop("disabled",true);
        bigBtn.prop("disabled",true);
        oliveBtn.prop("disabled",true);
        caesarBtn.prop("disabled",true);
        colaBtn.prop("disabled",true);
        cofeeBtn.prop("disabled",true);
        dltPosition.prop("disabled",true);
        console.log(Order);
    })
});