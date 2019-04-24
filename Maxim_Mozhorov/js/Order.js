var Order = {
    totalPrice : 0,
    totalKcal : 0,
    items : [],
    deleteItem : function (id) {
        this.totalPrice -= this.items[id].price;
        this.totalKcal -= this.items[id].kcal;
        this.items.splice(id,1);
    }
};
