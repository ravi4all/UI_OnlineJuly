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
    var num_1 = box_1.value;
    var num_2 = box_2.value;

    var expression = num_1 + opr + num_2;
    var result = eval(expression);
    console.log(expression,"=",result);
    
    document.getElementById("box_3").value = result;
}