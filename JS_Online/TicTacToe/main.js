window.addEventListener("load", initEvent);
var user_choice = "";
var cpu_choice = "";
var total_moves = 0;
function initEvent() {
    document.querySelector("#btn_1").addEventListener("click", choose_option);
}

function choose_option() {
    user_choice = document.querySelector("#box").value;
    if(user_choice == "X") {
        cpu_choice = "0";
    }
    else {
        cpu_choice = "X";
    }
    document.querySelector("table").style.display = "block";
    
    buttons = document.querySelectorAll('.btn');
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", user_move);
    }
}

function user_move() {
    this.innerHTML = user_choice;
    this.disabled = true;
    cpu_move();
    total_moves += 1;
}

function cpu_move() {
    cpu = true;
    while (cpu) {
        cpu_pos = parseInt(Math.random() * 9);
        if (buttons[cpu_pos].innerHTML == "0" || buttons[cpu_pos].innerHTML == "X") {
            console.log("Inside If");
            cpu = true;
        }
        else {
            console.log("Inside Else");
            cpu = false;
            break;
        }

        if(total_moves == 8) {
            cpu = false;
        }
    }

    if(!cpu) {
        buttons[cpu_pos].innerHTML = cpu_choice;
        buttons[cpu_pos].disabled = true;
        total_moves += 1;
    }
}