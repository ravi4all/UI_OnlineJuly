document.getElementById("btn").addEventListener("click", greet);
function greet() {
    username = document.getElementById("box").value;
    document.getElementById("output").innerHTML = username;
}