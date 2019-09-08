
let sign = "X";
let disp = document.getElementById("player");
// let score = document.getElementById('score');
// let restart = document.getElementById("restart");
// let scoreboard = {
//     player:0,
//     computer:0
// }

function printx(num) {
    let click = document.getElementById("r"+num);
    console.log(click);
    if(click.innerText == "") {
    click.innerText=sign;
    winner();
    checkSign();
    disp.innerHTML = sign + " Turn";

    }
}

function checkSign() {
    if(sign == "X")
    sign = "O";
    else
    sign = "X";
}

function getBox(no) {
    return document.getElementById("r"+no).innerHTML;
}

function checkMove(a,b,c,m) {
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m)
    return true;
    else
    return false;
}

function winner() {
    if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign) || checkMove(1,4,7,sign) || checkMove(2,5,8,sign) || checkMove(3,6,9,sign) || checkMove(1,5,9,sign) || checkMove(3,5,7,sign) ) {
        disp.innerHTML = sign + " is the Winner";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        throw "Game Finished";
    }

    else if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" && getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!="" ) {
        disp.innerHTML = "It's a Draw";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        throw "Draw";
    }
}

// function restartGame(){
//     scoreboard.player = 0;
//     scoreboard.computer = 0;
//     score.innerHTML = `
//     <p>X points : 0</p>
//     <p>O points : 0</p>
//     `;
// }

// restart.addEventListener('click',restartGame);