window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#search").addEventListener("keyup", searchProduct);
    loadProducts();
}

function loadProducts() {
    var ul = document.querySelector("#products");
    products.forEach(function(obj){
        var li = document.createElement("li");
        var h4  = document.createElement("h4");
        h4.innerHTML = obj.p_name;
        var img = document.createElement("img");
        img.src = obj.p_img;
        var p = document.createElement("p");
        p.innerHTML = "Rs "+obj.p_price;
        var btn = document.createElement("button");
        btn.innerHTML = "Add to cart";
        btn.className = "btn btn-primary w-75";
        btn.setAttribute('title',obj.p_id);
        // li.className = "list-group-item";

        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(btn);

        ul.appendChild(li);
        btn.addEventListener("click", add_to_cart);
    });
}

function add_to_cart() {
    var title = this.title;
    // console.log(title);
    for(var i = 0; i < products.length; i++) {
        if(products[i].p_id == title) {
            cart_obj.add_item(products[i].p_id, products[i].p_name,
                products[i].p_brand, products[i].p_category, 
                products[i].p_price, products[i].p_img);
                break
        }
    }
    showCart();
}

function showCart() {
    var ul = document.querySelector("#cart");
    ul.innerHTML = "";
    cart_obj.cart_items.forEach(function(obj){
        var li = document.createElement("li");
        var h6  = document.createElement("h6");
        h6.innerHTML = obj.name;
        var img = document.createElement("img");
        img.src = obj.img;
        var p = document.createElement("p");
        p.innerHTML = "Rs "+obj.price;
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "btn btn-primary";
        btn.setAttribute('title',obj.id);
        // li.className = "list-group-item";

        li.appendChild(img);
        li.appendChild(h6);
        li.appendChild(p);
        li.appendChild(btn);

        ul.appendChild(li);
        btn.addEventListener("click", deleteProduct);
    });
}

function deleteProduct() {
    var id = this.title;
    cart_obj.delete_item(parseInt(id));
    showCart();
}

function searchProduct() {
    var to_search = this.value;
    // var items = products.filter(function(obj) {
    //     return (obj.p_brand == to_search) || (obj.p_category == to_search) || (obj.p_name.includes(to_search));
    // });
    var items = [];
    for(var i = 0; i < products.length; i++) {
        if(products[i].p_brand.includes(to_search) || products[i].p_category.includes(to_search) || products[i].p_name.includes(to_search)) {
            items.push(products[i]);
        }
    }
    console.log(items);
}