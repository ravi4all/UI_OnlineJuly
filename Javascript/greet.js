// Event binding
// - bind function with an event
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", greet);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", greet);    
}

function greet() {
    username = document.getElementById("box").value;
    document.getElementById("output").innerHTML = username;
}