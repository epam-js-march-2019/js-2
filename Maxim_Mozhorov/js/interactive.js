$(".menu-list_burger .btn").click(function () {
    var size = $('.menu-list_burger .burger-type-class input[type=radio]:checked').val();
    var stuffing = $('.menu-list_burger .burger-stuffing-type-class input[type=radio]:checked').val();
    var newBurger = new Burger(size, stuffing);
    if(stuffing === ""){
        $(".order-list ul").append("<li>Гамбургер("+size+") без дополнительных ингридиентов <span data-id='"+(Order.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    }
    else {
        $(".order-list ul").append("<li>Гамбургер("+size+") c "+stuffing+" <span data-id='"+(Order.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    }
    ShowTotalPrice();

});

$(".menu-list_salad .btn").click(function () {
    var type = $('.menu-list_salad input[type=radio]:checked').val();
    var newSalad = new Salad(type);
    $(".order-list ul").append("<li>Салат: "+type+" <span data-id='"+(Order.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    ShowTotalPrice();
});

$(".menu-list_drink .btn").click(function () {
    var type = $('.menu-list_drink input[type=radio]:checked').val();
    var newDrink = new Drink(type);
    $(".order-list ul").append("<li>Напиток: "+type+" <span data-id='"+(Order.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    ShowTotalPrice();
});



$( ".order-list ul" ).on("click","li .glyphicon-trash", function(event) {
    Order.deleteItem($(this).attr("data-id"));
    UpdateList();
});

$('button').click(function () {
   $(".order-list").css("display","block");
});


$('.order-list .btn-info').click(function () {
    FinishOrder();
});


function UpdateList() {
    ClearVisualList();
    Order.items.forEach(function (item, i, arr) {
        console.log(item);
        if (item['name'] == "Burger"){
            var size = item['type'];
            var stuffing = item['stuffing'];
            if(stuffing === ""){
                $(".order-list ul").append("<li>Гамбургер("+size+") без дополнительных ингридиентов <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
            }
            else {
                $(".order-list ul").append("<li>Гамбургер("+size+") c "+stuffing+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
            }
        }
        else if (item['name'] == "Salad"){
            var type = item['type'];
            $(".order-list ul").append("<li>Салат: "+type+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
        }
        else if (item['name'] == "Drink"){
            var type = item['type'];
            $(".order-list ul").append("<li>Напиток: "+type+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
        }
    });
    ShowTotalPrice();
}


function ClearVisualList() {
    $( ".order-list ul" ).empty();
}

function ShowTotalPrice() {
    if (Order.totalPrice != 0){
        $(".total-price").html("Итого: "+Order.totalPrice + " ("+Order.totalKcal+" kcal)");
        $(".total-price").css("display", "block");
        $(".btn-info").css("display", "block");
    }
    else {
        $(".btn-info").css("display", "none");
        $(".total-price").css("display", "none");
    }
}

function FinishOrder() {
    $("button").each(function (i,elem) {
        $(this).prop("disabled", true);
    });
    $("input[type=radio]").each(function (i,elem) {
        $(this).prop("disabled", true);
    });

    $("ul li span").each(function (idx, item) {
        $(this).css("display","none");
    });


    $(".order-list").append("<p>Ваш заказ успешно оформлен, мы свяжемся с вами в ближайшее время. Для создания нового заказа перезагрузите страницу</p>");

}