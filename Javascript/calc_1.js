window.addEventListener("load", initEvent);

function initEvent() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");

    document.getElementById("btn_1").addEventListener("click", add);
    document.getElementById("btn_2").addEventListener("click", sub);
    document.getElementById("btn_3").addEventListener("click", div);
    document.getElementById("btn_4").addEventListener("click", mul);
}

function add() {
    result = parseInt(f_num.value) + parseInt(s_num.value);
    console.log(result);
    document.getElementById("box_3").value = result;
}
function sub() {
    result = parseInt(f_num.value) - parseInt(s_num.value);
    console.log(result);
    document.getElementById("box_3").value = result;
}
function div() {
    result = parseInt(f_num.value) / parseInt(s_num.value);
    console.log(result);
    document.getElementById("box_3").value = result;
}
function mul() {
    result = parseInt(f_num.value) * parseInt(s_num.value);
    console.log(result);
    document.getElementById("box_3").value = result;
}