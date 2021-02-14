// window.addEventListener('load', function() {
//     // event binding
//     document.getElementById('btn').addEventListener('click', greet);
// });

window.addEventListener('load', initEvent);

function initEvent() {
    document.getElementById('btn').addEventListener('click', greet);
}

function greet() {
    var text_box = document.getElementById('box_1');
    var username = text_box.value;
    console.log(username);
    var output_tag = document.getElementById("output");
    output_tag.innerHTML = username;
    text_box.value = "";
    output_tag.style.color = 'red';
}