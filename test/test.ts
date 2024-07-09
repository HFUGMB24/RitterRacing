// Get the canvas element and context
let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

interface Platform {
    posX: number,
    posY: number,
    width: number,
    height: number,
    color: string,
    path: Path2D,
}

let PlatformArray: Platform[] = [];

function createPlatforms() {
    let Platforms: Platform[] = [];
    let Platform1: Platform = {
        posX: 200,
        posY: 200,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(Platform1);
    PlatformArray.push(Platform1);

    return Platforms;
}

function drawPlatforms(_platform: Platform[]): void {
    for (let i: number = 0; i < PlatformArray.length; i++) {
        let plat: Path2D = _platform[i].path;
        plat.rect(_platform[i].posX, _platform[i].posY, _platform[i].width, _platform[i].height);
        ctx.fillStyle = _platform[i].color;
        ctx.fill(plat);
    }
}


// Define the player class
class Player {
    friction: number = 0.9; // Friction factor to simulate momentum

    constructor(
        public GravitationalVelocity: number = 0,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public color: string,
        //public speed: number,
        public dirX: number = 0,
        public dirY: number = 0,
        )   { //this.x = x;
            //this.y = y;
            //this.velocityY = 0; 
            }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    CharTopLeftX: number = this.x;
    CharTopLeftY: number = this.y;
    CharTopRightX: number = this.x + this.width;
    CharTopRightY: number = this.y;
    CharBottomLeftX: number = this.x;
    CharBottomLeftY: number = this.y + this.height;
    CharBottomRightX: number = this.x + this.width;
    CharBottomRightY: number = this.y + this.height;

    touchGrass: boolean = false;

    update() {
        this.dirX *= this.friction;
        this.dirY *= this.friction;

        this.x += this.dirX;
        this.y += this.dirY;

        // Prevent the player from going out of bounds
        if (this.x < 0) {this.x = 0;}
        if (this.y < 0) {this.y = 0;}
        if (this.x + this.width > canvas.width) {this.x = canvas.width - this.width;}
        if (this.y + this.height > canvas.height) {this.y = canvas.height - this.height;}
    
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
        }
    
    }

    accelerate(accX: number, accY: number) {
        this.dirX += accX;
        this.dirY += accY;
    }

    applyGravity() {
        if (this.y == canvas.height - this.height) {return;} // if (floor) {leave function}
        const gravity = 0.1; // Adjust as needed
        this.GravitationalVelocity += gravity; // Update vertical velocity
        this.y += this.GravitationalVelocity; // Update character position
    }
}

// Create two player objects
const player1 = new Player(0, 50, 50, 50, 50, "blue");
const player2 = new Player(0, 200, 50, 50, 50, "red");

// Key handling
const keys: { [key: string]: boolean } = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    
    a: false,
    d: false,
    w: false,
};

function KeyDown(_event: KeyboardEvent): void {
    keys[_event.key] = true;
}
window.addEventListener("keydown", KeyDown);

function KeyUp(_event: KeyboardEvent): void {
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
    if (keys['a']) player1.accelerate(-acceleration, 0);
    if (keys['d']) player1.accelerate(acceleration, 0);
    if (keys['w']) player1.accelerate(0, -acceleration);

    // Update player 2 (Arrow Keys)
    if (keys['ArrowLeft']) player2.accelerate(-acceleration, 0);
    if (keys['ArrowRight']) player2.accelerate(acceleration, 0);
    if (keys['ArrowUp']) player2.accelerate(0, -acceleration*15);
}

// Game loop
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    updatePlayers();
    player1.update();
    player2.update();
    player1.applyGravity();
    player2.applyGravity();
}

function draw() {
    player1.draw();
    player2.draw();
}

function gameLoop() {
    drawPlatforms(createPlatforms());
    clear();
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
