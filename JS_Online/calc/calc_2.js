window.addEventListener("load", initEvents);

var box_1;
var box_2;

function initEvents() {
    box_1 = document.getElementById("box_1");
    box_2 = document.getElementById("box_2");
    var buttons = document.getElementsByClassName("btn");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = this.innerHTML;
    var num_1 = parseInt(box_1.value);
    var num_2 = parseInt(box_2.value);
    if (opr == "+") {
        var result = num_1 + num_2;
    }
    else if (opr == "-") {
        var result = num_1 - num_2;
    }
    document.getElementById("box_3").value = result;
}