window.addEventListener("load", initEvents);

var box_1;
var box_2;

function initEvents() {
    box_1 = document.getElementById("box_1");
    box_2 = document.getElementById("box_2");
    document.getElementById("btn_1").addEventListener("click", add);
    document.getElementById("btn_2").addEventListener("click", sub);
    document.getElementById("btn_3").addEventListener("click", div);
    document.getElementById("btn_4").addEventListener("click", mul);
}

function add() {
    var num_1 = parseInt(box_1.value);
    var num_2 = parseInt(box_2.value);
    var result = num_1 + num_2;
    document.getElementById("box_3").value = result;
}

function sub() {
    var num_1 = parseInt(box_1.value);
    var num_2 = parseInt(box_2.value);
    var result = num_1 - num_2;
    document.getElementById("box_3").value = result;
}

function div() {
    var num_1 = parseInt(box_1.value);
    var num_2 = parseInt(box_2.value);
    var result = num_1 / num_2;
    document.getElementById("box_3").value = result;
}

function mul() {
    var num_1 = parseInt(box_1.value);
    var num_2 = parseInt(box_2.value);
    var result = num_1 * num_2;
    document.getElementById("box_3").value = result;
}