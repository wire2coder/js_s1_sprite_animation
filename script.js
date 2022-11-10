let playerState = 'dizzy'
const dropdown_value = document.getElementById('animations'); // 'id' is like a HTML variable
dropdown_value.addEventListener('change', function(event1) {
    playerState = event1.target.value;
});

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



let gameFrame=0; // just a variable to 'slow down' the 'animation'
const staggerFrame=5; // just a variable to 'slow down' the 'animation'

const spriteAnimations = []; // empty array
const animationStates = [
    {name: 'idle', frames: 7},{name: 'jump', frames: 7},
    {name: 'fall', frames: 7},{name: 'run', frames: 8},
    {name: 'dizzy', frames: 11},{name: 'sit', frames: 5},
    {name: 'roll', frames: 7},{name: 'bite', frames: 7},
    {name: 'ko', frames: 12},{name: 'getHit', frames: 4},
]


animationStates.forEach((state, index)=>{
    let frames = { loc : [] };

    for (let j=0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;

        frames["loc"].push( {x : positionX, y : positionY} );
    }

    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

// make a function
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);    
    // ctx.fillRect(50, 50, 100, 100); // making a simple rectangle
    // ctx.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh);
    // ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let asdf_lenght = spriteAnimations[playerState].loc.length;
    let animation_delay_stuff = gameFrame/staggerFrame
    let position = Math.floor(animation_delay_stuff) % asdf_lenght;

    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, 
        spriteWidth, spriteHeight, 
        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate) // recursive function call?
}

animate();