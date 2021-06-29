const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

playerPosx = 130;
playerPosy = 565;
plaherHei = 30;
playerWid = 30;
playerSpd = 3;


var carrosX = [730, 730, 730, 730, 730];
var carrosY = [485, 485 -100, 485 -200, 485 -300, 485 -400];
var carrosSpd = [45, 25, 35 , 30 ,20];

carsHei = 30;
carsWid = 60;


/* movendo personagem */
var UP = 38,  DOWN = 40, LEFT = 37, RIGHT = 39;

var mvLeft = false, mvRight = false, mvUp = false, mvDown = false;

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyupHandler);

function keydownHandler(e) {
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT) {
        mvLeft = true;
    }
    if(key === RIGHT && key !== LEFT) {
        mvRight = true;
    }
    if(key === UP && key !== DOWN) {
        mvUp = true;
    }
    if(key === DOWN && key !== UP) {
        mvDown = true;
    }
}

function keyupHandler(e) {
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT) {
        mvLeft = false;
    }
    if(key === RIGHT && key !== LEFT) {
        mvRight = false;
    }
    if(key === UP && key !== DOWN) {
        mvUp = false;
    }
    if(key === DOWN && key !== UP) {
        mvDown = false;
    }
}

function move() {
    if(mvLeft) {
        playerPosx -= playerSpd;
    }
    if(mvRight) {
        playerPosx += playerSpd;
    }
    if(mvUp) {
        playerPosy -= playerSpd;
    }
    if(mvDown) {
        playerPosy += playerSpd;
    }
}
/* movendo personagem */


/* colisao do personagem nas bordas */
function limite() {
    if(playerPosx <= 0) {
        playerPosx += playerWid -27;
    }
    if(playerPosx >= 770) {
        playerPosx -= playerWid -27;
    }
    if(playerPosy <= 0) {
        playerPosy += plaherHei -27;
    }
    if(playerPosy >= 570) {
        playerPosy -= plaherHei -27;
    }
}
/* colisao do personagem nas bordas */


/* movimento e loop */
function movecar() {
    carrosX[0] -= carrosSpd[0];
    carrosX[1] -= carrosSpd[1];
    carrosX[2] -= carrosSpd[2];;
    carrosX[3] -= carrosSpd[3];;
    carrosX[4] -= carrosSpd[4];;

    for(var i = 0; i < 5; i++) {
    if(carrosX[i] <= -60) {
        carrosX[i] *= -13;
    }
}
}
/* movimento e loop */


/*colisao do player com os carros */
function colisao() {
    for(var i = 0; i < 5; i++) {
    if(playerPosx < carrosX[i] + carsWid &&
        playerPosx + playerWid > carrosX[i] && 
        playerPosy < carrosY[i] + carsHei &&
        playerPosy + plaherHei > carrosY[i]) {

            restart();
    }
}
}
function restart() {
    playerPosx = 130;
    playerPosy = 550;
}
/*colisao do player com os carros */

(function update(){

    ctx.clearRect(0,0,800,600);
    ctx.beginPath();
    ctx.fillStyle = '#606060';
    ctx.fillRect(0, 0, canvas.width, 65);

    ctx.beginPath();
    ctx.fillStyle = '#606060';
    ctx.fillRect(0, 535, canvas.width, 65);

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(playerPosx, playerPosy, plaherHei, playerWid);
    
 /* gerando "carros" */
    for(var i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fillRect(carrosX[i], carrosY[i], carsWid, carsHei);
    }
 /* gerando "carros" */


    limite();
    colisao();
    movecar();
    move();
    requestAnimationFrame(update)
})();

