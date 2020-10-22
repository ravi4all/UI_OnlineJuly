// function Product(id,name,brand,category,price,img) {
//     this.id = id;
//     this.name = name;
//     this.brand = brand;
//     this.category = category;
//     this.price = price;
//     this.img = img;
// }

class Product {
    constructor(id, name, brand, category, price, img) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.img = img;
    }
}

var cart_obj = {
    cart_items : [],
    add_item : function(id, name, brand, category, price, img) {
        var obj = new Product(id, name, brand, category, price, img);
        this.cart_items.push(obj);
        console.log(this.cart_items);
    },
    delete_item : function() {

    },
    search_item : function() {

    },
    update_item : function() {

    },
    sort_items : function() {

    }
}
