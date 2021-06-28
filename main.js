const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

playerPosx = 130;
playerPosy = 565;
plaherHei = 30;
playerWid = 30;
playerSpd = 3;


carPosx = 730;
carPosy = 485;
carHei = 30;
carWid = 60;
carSpd = 45;

car2posx = 730;
car2Spd = 25;

car3posx = 730;
car3Spd = 35;

car4posx = 730;
car4Spd = 30;

car5posx = 730;
car5Spd = 20;


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

function movecar() {
    carPosx -= carSpd;
    car2posx -= car2Spd;
    car3posx -= car3Spd;
    car4posx -= car4Spd;
    car5posx -= car5Spd;


    if(carPosx <= -60) {
        carPosx *= -13;
    }
    if(car2posx <= -60) {
        car2posx *= -13;
    }
    if(car3posx <= -60) {
        car3posx *= -13;
    }
    if(car4posx <= -60) {
        car4posx *= -13;
    }
    if(car5posx <= -60) {
        car5posx *= -13;
    }
}

function colisao() {
    if(playerPosx < carPosx + carWid &&
        playerPosx + playerWid > carPosx && 
        playerPosy < carPosy + carHei &&
        playerPosy + plaherHei > carPosy) {

            restart();
    }

    if(playerPosx < car2posx + carWid &&
        playerPosx + playerWid > car2posx && 
        playerPosy < carPosy -100 + carHei &&
        playerPosy + plaherHei > carPosy -100){

            restart();
    }
    if(playerPosx < car3posx + carWid &&
        playerPosx + playerWid > car3posx && 
        playerPosy < carPosy -200 + carHei &&
        playerPosy + plaherHei > carPosy -200){

            restart();
    }
    if(playerPosx < car4posx + carWid &&
        playerPosx + playerWid > car4posx && 
        playerPosy < carPosy -300 + carHei &&
        playerPosy + plaherHei > carPosy -300){

            restart(); 
    }
    if(playerPosx < car5posx + carWid &&
        playerPosx + playerWid > car5posx && 
        playerPosy < carPosy -400 + carHei &&
        playerPosy + plaherHei > carPosy -400){
            
            restart(); 
    }
}

function restart() {
    document.getElementById("travessias").innerHTML = 0;
    playerPosx = 130;
    playerPosy = 550;
}


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
    ctx.lineTo(10, 150);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(playerPosx, playerPosy, plaherHei, playerWid);
    
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(carPosx, carPosy, carWid, carHei);

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(car2posx, carPosy - 100, carWid, carHei);

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(car3posx, carPosy - 200, carWid, carHei);

    
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(car4posx, carPosy - 300, carWid, carHei);

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(car5posx, carPosy - 400, carWid, carHei);
    

    limite();
    colisao();
    movecar();
    move();
    requestAnimationFrame(update)
})();
