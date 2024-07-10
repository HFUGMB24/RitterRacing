"use strict";
// Get the canvas element and context
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let PlatformArray = [];
function createPlatforms() {
    let Platforms = [];
    let floor = {
        posX: 0,
        posY: 675,
        width: canvas.width,
        height: 50,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(floor);
    PlatformArray.push(floor);
    let RedBorderLeft = {
        posX: 300,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(RedBorderLeft);
    PlatformArray.push(RedBorderLeft);
    let RedBorderRight = {
        posX: 700,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(RedBorderRight);
    PlatformArray.push(RedBorderRight);
    let BlueBorderLeft = {
        posX: 790,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(BlueBorderLeft);
    PlatformArray.push(BlueBorderLeft);
    let BlueBorderRight = {
        posX: 1188,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(BlueBorderRight);
    PlatformArray.push(BlueBorderRight);
    let Platform1 = {
        posX: 300,
        posY: 420,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(Platform1);
    PlatformArray.push(Platform1);
    let Platform2 = {
        posX: 70,
        posY: 200,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    };
    Platforms.push(Platform2);
    PlatformArray.push(Platform2);
    return Platforms;
}
function drawPlatforms(_platform) {
    for (let i = 0; i < PlatformArray.length; i++) {
        let plat = _platform[i].path;
        plat.rect(_platform[i].posX, _platform[i].posY, _platform[i].width, _platform[i].height);
        ctx.fillStyle = _platform[i].color;
        ctx.fill(plat);
    }
}
// Define the player class
class Player {
    constructor(x, y, width, height, color, 
    //public speed: number,
    dirX = 0, dirY = 0, GravitationalVelocity = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dirX = dirX;
        this.dirY = dirY;
        this.GravitationalVelocity = GravitationalVelocity;
        this.friction = 0.9; // Friction factor to simulate momentum
        this.CharTopLeftX = this.x;
        this.CharTopLeftY = this.y;
        this.CharTopRightX = this.x + this.width;
        this.CharTopRightY = this.y;
        this.CharBottomLeftX = this.x;
        this.CharBottomLeftY = this.y + this.height;
        this.CharBottomRightX = this.x + this.width;
        this.CharBottomRightY = this.y + this.height;
        this.touchGrass = false;
        //this.y = y;
        //this.velocityY = 0; 
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.dirX *= this.friction;
        this.dirY *= this.friction;
        this.x += this.dirX;
        this.y += this.dirY;
        // Prevent the player from going out of bounds
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
        }
        /*this.CharTopLeftX = this.x;
        this.CharTopLeftY = this.y;
        this.CharTopRightX = this.x + this.width;
        this.CharTopRightY = this.y;
        this.CharBottomLeftX = this.x;
        this.CharBottomLeftY = this.y + this.height;
        this.CharBottomRightX = this.x + this.width;
        this.CharBottomRightY = this.y + this.height;
        
        for (let i:number = 0; i < PlatformArray.length; i++) {
            if (ctx.isPointInPath(PlatformArray[i].path, this.CharTopLeftX, this.CharTopLeftY) == true) {
                this.touchGrass = true;
            } else {this.touchGrass = false;}
        }
    
        for (let i:number = 0; i < PlatformArray.length; i++) {
            if (ctx.isPointInPath(PlatformArray[i].path, this.CharTopRightX, this.CharTopRightY) == true) {
                this.touchGrass = true;
            } else {this.touchGrass = false;}
        }
    
        for (let i:number = 0; i < PlatformArray.length; i++) {
            if (ctx.isPointInPath(PlatformArray[i].path, this.CharBottomLeftX, this.CharBottomLeftY) == true) {
                this.touchGrass = true;
            } else {this.touchGrass = false;}
        }
    
        for (let i:number = 0; i < PlatformArray.length; i++) {
            if (ctx.isPointInPath(PlatformArray[i].path, this.CharBottomRightX, this.CharBottomRightY) == true) {
                this.touchGrass = true;
            } else {this.touchGrass = false;}
        }*/
        this.checkPlatformCollision();
    }
    checkPlatformCollision() {
        this.touchGrass = false;
        let FeetCollisionPoints = [
            { x: this.x * 1.1, y: this.y * 0.8 + this.height }, // Top-left
            { x: this.x * 0.9 + this.width, y: this.y * 0.8 + this.height }, // Top-right
            { x: this.x * 1.1, y: this.y + this.height }, // Bottom-left
            { x: this.x * 0.9 + this.width, y: this.y + this.height } // Bottom-right
        ];
        for (let platform of PlatformArray) {
            //let i: number = 0;
            for (let point of FeetCollisionPoints) {
                //i++; //check with loop iterator which collPoint is in Path, then adjust movement based on whether char is touching wall, ceiling or grass
                if (ctx.isPointInPath(platform.path, point.x, point.y)) {
                    this.touchGrass = true;
                    this.GravitationalVelocity = 0; // Reset gravitational velocity
                    //break;
                }
            }
        }
        let BodyCollisionPoints = [
            { x: this.x, y: this.y }, // Top-left
            { x: this.x + this.width, y: this.y }, // Top-right
            { x: this.x, y: this.y * 0.9 + this.height }, // Bottom-left
            { x: this.x + this.width, y: this.y * 0.9 + this.height } // Bottom-right
        ];
        for (let platform of PlatformArray) {
            for (let point of BodyCollisionPoints) {
                if (ctx.isPointInPath(platform.path, point.x, point.y)) {
                    this.dirX = 0;
                    this.dirY = 0;
                }
            }
        }
    }
    /*checkPlatformCollision() {
        this.touchGrass = false;
        let bottomCollisionPoints = [
            { x: this.x, y: this.y }, // Top-left
            { x: this.x + this.width, y: this.y }, // Top-right
            { x: this.x, y: this.y + this.height }, // Bottom-left
            { x: this.x + this.width, y: this.y + this.height } // Bottom-right
        ];

        for (let platform of PlatformArray) {
            let i: number = 0;
            for (let point of bottomCollisionPoints) {

                if (ctx.isPointInPath(platform.path, point.x, point.y)) {
                    this.touchGrass = true;
                    this.GravitationalVelocity = 0; // Reset gravitational velocity
                    //break;
                }
            }
        }
    }*/
    /*checkPlatformCollision() {
        this.touchGrass = false;

        for (let platform of PlatformArray) {
            if (ctx.isPointInPath(platform.path, this.CharBottomLeftX, this.CharBottomLeftY)) {
                if (ctx.isPointInPath(platform.path, this.CharBottomRightX, this.CharBottomRightY)) {

                }
            }
            
        }
    }*/
    accelerate(accX, accY) {
        this.dirX += accX;
        this.dirY += accY;
    }
    applyGravity() {
        if (this.touchGrass == true) {
            return;
        } // if (floor) {leave function}
        const gravity = 0.1; // Adjust as needed
        this.GravitationalVelocity += gravity; // Update vertical velocity
        this.y += this.GravitationalVelocity; // Update character position
    }
}
// Create two player objects
const player1 = new Player(460, 620, 50, 50, "red");
const player2 = new Player(1410, 620, 50, 50, "blue");
// Key handling
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    a: false,
    d: false,
    w: false,
};
function KeyDown(_event) {
    keys[_event.key] = true;
}
window.addEventListener("keydown", KeyDown);
function KeyUp(_event) {
    keys[_event.key] = false;
}
window.addEventListener("keyup", KeyUp);
/*
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
*/
function updatePlayers() {
    // Acceleration factor
    const acceleration = 0.5;
    // Update player 1 (WASD)
    if (keys['a']) {
        player1.accelerate(-acceleration, 0);
    }
    if (keys['d']) {
        player1.accelerate(acceleration, 0);
    }
    if (keys['w'] && player1.touchGrass) {
        player1.accelerate(0, -acceleration * 30);
    }
    // Update player 2 (Arrow Keys)
    if (keys['ArrowLeft']) {
        player2.accelerate(-acceleration, 0);
    }
    if (keys['ArrowRight']) {
        player2.accelerate(acceleration, 0);
    }
    if (keys['ArrowUp'] && player2.touchGrass) {
        player2.accelerate(0, -acceleration * 30);
    }
}
// Game loop
drawPlatforms(createPlatforms());
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}
function update() {
    player1.applyGravity();
    player2.applyGravity();
    updatePlayers();
    player1.update();
    player2.update();
}
function draw() {
    player1.draw();
    player2.draw();
}
function gameLoop() {
    clear();
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();
