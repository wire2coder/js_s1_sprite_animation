const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

// 'sprite' is just an image file with many pictures in it
// calculating the widht and the height
spriteWidth = 575; // image width divide by number of 'columns' 
spriteHeight = 523; // image height divde by number of 'rows'

let current_column_pos=0;
let current_row_pos=0;
let xFrame=0;
let yFrame=3;

let gameFrame=0; // just a variable to 'slow down' the 'animation'
const staggerFrame=5; // just a variable to 'slow down' the 'animation'

// make a function
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);    
    // ctx.fillRect(50, 50, 100, 100); // making a simple rectangle
    // ctx.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh);
    // ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    current_column_pos = xFrame * spriteWidth
    current_row_pos = yFrame * spriteHeight
    ctx.drawImage(playerImage, current_column_pos, current_row_pos, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // for 'slowing down' the 'animation'
    if (gameFrame % staggerFrame==0) { // 0 'mod_remainder' 5
        if (xFrame < 6) xFrame++;
        else xFrame=0 ;
    }
    gameFrame++;
    requestAnimationFrame(animate)
}

animate();