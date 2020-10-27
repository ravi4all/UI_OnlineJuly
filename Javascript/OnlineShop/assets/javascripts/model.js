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
        this.to_delete = false;
    }
}

var cart_obj = {
    cart_items : [],
    add_item : function(id, name, brand, category, price, img) {
        var obj = new Product(id, name, brand, category, price, img);
        this.cart_items.push(obj);
        // console.log(this.cart_items);
    },
    delete_item : function(id) {
        // for(var i = 0; i < this.cart_items.length; i++) {
        //     if(this.cart_items[i].p_id == id) {
        //         var current_obj = this.cart_items[i];
        //             break
        //     }
        // }
        // console.log("Id is",id);
        var current_obj = this.cart_items.filter(function(x) {
            return x.id == id;
        });
        // console.log(current_obj);
        
        current_obj[0].to_delete = true;
        
        this.cart_items = this.cart_items.filter(function(x) {
            return x.to_delete == false;
        });

    },
    search_item : function() {

    },
    update_item : function() {

    },
    sort_items : function() {

    }
}
