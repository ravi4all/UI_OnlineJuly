window.addEventListener("load", initEvents);
var expression = "";
var textBox;
function initEvents() {
    var nums = document.querySelectorAll(".num");
    var oprs = document.querySelectorAll(".opr");
    textBox = document.querySelector("#box_1");
    for(var i = 0; i < nums.length; i++) {
        nums[i].addEventListener("click",appendNumbers);
    }
    for(var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click",appendOperators);
    }
}

function appendNumbers() {
    // console.log(this);
    var number = this.innerHTML;
    expression += number;
    textBox.value = expression;
}

function appendOperators() {
    var number = this.innerHTML;
    expression += number;
    textBox.value = expression;
}

function calc() {
    
}