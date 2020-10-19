window.addEventListener("load", initEvents);

function initEvents() {
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
        // li.className = "list-group-item";

        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(btn);

        ul.appendChild(li);
    });
}