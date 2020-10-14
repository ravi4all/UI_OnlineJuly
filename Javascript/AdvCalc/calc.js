window.addEventListener("load", initEvents);

function initEvents() {
    var nums = document.querySelectorAll(".num");
    var oprs = document.querySelectorAll(".opr");
    for(var i = 0; i < nums.length; i++) {
        nums[i].addEventListener("click",appendNumbers);
    }
    for(var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click",appendOperators);
    }
}

function appendNumbers() {

}

function appendOperators() {

}

function calc() {
    
}