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

    let floor: Platform = {
        posX: 0,
        posY: 675,
        width: canvas.width,
        height: 50,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(floor);
    PlatformArray.push(floor);

    let RedBorderLeft: Platform = {
        posX: 300,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(RedBorderLeft);
    PlatformArray.push(RedBorderLeft);

    let RedBorderRight: Platform = {
        posX: 700,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(RedBorderRight);
    PlatformArray.push(RedBorderRight);

    let BlueBorderLeft: Platform = {
        posX: 790,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(BlueBorderLeft);
    PlatformArray.push(BlueBorderLeft);

    let BlueBorderRight: Platform = {
        posX: 1188,
        posY: 0,
        width: 50,
        height: canvas.height,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(BlueBorderRight);
    PlatformArray.push(BlueBorderRight);

    let PlatformB1: Platform = {
        posX: 900,
        posY: 560,
        width: 75,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB1);
    PlatformArray.push(PlatformB1);

    let PlatformB2: Platform = {
        posX: 950,
        posY: 600,
        width: 150,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB2);
    PlatformArray.push(PlatformB2);

    let PlatformB3: Platform = {
        posX: 950,
        posY: 500,
        width: 250,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB3);
    PlatformArray.push(PlatformB3);

    let PlatformB4: Platform = {
        posX: 825,
        posY: 440,
        width: 300,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB4);
    PlatformArray.push(PlatformB4);

    let PlatformB5: Platform = {
        posX: 840,
        posY: 350,
        width: 50,
        height: 100,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB5);
    PlatformArray.push(PlatformB5);

    let PlatformB6: Platform = {
        posX: 885,
        posY: 400,
        width: 50,
        height: 50,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB6);
    PlatformArray.push(PlatformB6);

    let PlatformB7: Platform = {
        posX: 1000,
        posY: 350,
        width: 225,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB7);
    PlatformArray.push(PlatformB7);

    let PlatformB8: Platform = {
        posX: 915,
        posY: 300,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB8);
    PlatformArray.push(PlatformB8);

    let PlatformB9: Platform = {
        posX: 1050,
        posY: 300,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB9);
    PlatformArray.push(PlatformB9);

    let PlatformB10: Platform = {
        posX: 1105,
        posY: 240,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB10);
    PlatformArray.push(PlatformB10);

    let PlatformB11: Platform = {
        posX: 1150,
        posY: 200,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB11);
    PlatformArray.push(PlatformB11);

    let PlatformB12: Platform = {
        posX: 830,
        posY: 170,
        width: 275,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB12);
    PlatformArray.push(PlatformB12);

    let PlatformB13: Platform = {
        posX: 930,
        posY: 120,
        width: 150,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformB13);
    PlatformArray.push(PlatformB13);

    let PlatformR1: Platform = {
        posX: 400,
        posY: 560,
        width: 75,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR1);
    PlatformArray.push(PlatformR1);

    let PlatformR2: Platform = {
        posX: 450,
        posY: 600,
        width: 150,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR2);
    PlatformArray.push(PlatformR2);

    let PlatformR3: Platform = {
        posX: 475,
        posY: 500,
        width: 250,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR3);
    PlatformArray.push(PlatformR3);

    let PlatformR4: Platform = {
        posX: 325,
        posY: 440,
        width: 300,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR4);
    PlatformArray.push(PlatformR4);

    let PlatformR5: Platform = {
        posX: 350,
        posY: 350,
        width: 50,
        height: 100,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR5);
    PlatformArray.push(PlatformR5);

    let PlatformR6: Platform = {
        posX: 390,
        posY: 400,
        width: 50,
        height: 50,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR6);
    PlatformArray.push(PlatformR6);

    let PlatformR7: Platform = {
        posX: 500,
        posY: 350,
        width: 225,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR7);
    PlatformArray.push(PlatformR7);

    let PlatformR8: Platform = {
        posX: 420,
        posY: 300,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR8);
    PlatformArray.push(PlatformR8);

    let PlatformR9: Platform = {
        posX: 550,
        posY: 300,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR9);
    PlatformArray.push(PlatformR9);

    let PlatformR10: Platform = {
        posX: 615,
        posY: 240,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR10);
    PlatformArray.push(PlatformR10);

    let PlatformR11: Platform = {
        posX: 660,
        posY: 200,
        width: 50,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR11);
    PlatformArray.push(PlatformR11);

    let PlatformR12: Platform = {
        posX: 340,
        posY: 170,
        width: 275,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR12);
    PlatformArray.push(PlatformR12);

    let PlatformR13: Platform = {
        posX: 435,
        posY: 120,
        width: 150,
        height: 10,
        color: "black",
        path: new Path2D,
    }
    Platforms.push(PlatformR13);
    PlatformArray.push(PlatformR13);

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
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public color: string,
        //public speed: number,
        public dirX: number = 0,
        public dirY: number = 0,
        public GravitationalVelocity: number = 0,
        )   { //this.x = x;
            //this.y = y;
            //this.velocityY = 0; 
            }
            
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    updateMovement() {
        this.dirX *= this.friction;
        this.dirY *= this.friction;
        
        this.x += this.dirX;
        this.y += this.dirY;
        
        // Prevent the player from going out of bounds
        if (this.x < 0) {this.x = 0;}
        if (this.y < 0) {this.y = 0;}
        if (this.x + this.width > canvas.width) {this.x = canvas.width - this.width;}
        if (this.y + this.height > canvas.height) {this.y = canvas.height - this.height;}

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

    CharTopLeftX: number = this.x;
    CharTopLeftY: number = this.y;
    CharTopRightX: number = this.x + this.width;
    CharTopRightY: number = this.y;
    CharBottomLeftX: number = this.x;
    CharBottomLeftY: number = this.y + this.height;
    CharBottomRightX: number = this.x + this.width;
    CharBottomRightY: number = this.y + this.height;

    touchGrass: boolean = false;

    checkPlatformCollision() {
        this.touchGrass = false;

        let FeetCollisionPoints = [
            { x: this.x + this.width * 0.1, y: this.y + this.height * 0.8}, // Top-left
            { x: this.x + this.width * 0.9, y: this.y + this.height * 0.8}, // Top-right
            { x: this.x + this.width * 0.1, y: this.y + this.height }, // Bottom-left
            { x: this.x + this.width * 0.9, y: this.y + this.height } // Bottom-right
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
                    this.accelerate(0,0);
                    this.dirX = 0;
                    this.dirY = 0;
                    console.log("bonk");
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

    accelerate(accX: number, accY: number) {
        this.dirX += accX;
        this.dirY += accY;
    }

    applyGravity() {
        if (this.touchGrass == true) {return;} // if (floor) {leave function}
        const gravity = 0.2; // Adjust as needed
        this.GravitationalVelocity += gravity; // Update vertical velocity
        this.y += this.GravitationalVelocity; // Update character position
    }
}

//goal class
class goal {
    public goalx: number;
    public goaly: number;
    public goalwidth: number;
    public goalheight: number;

    constructor (goalx: number, goaly: number, goalwidth:number , goalheight:number) {
        this.goalx = goalx;
        this.goaly = goaly;
        this.goalwidth = goalwidth;
        this.goalheight = goalheight;
    }

    draw() {
        ctx.fillStyle = '#00000000';
        ctx.fillRect(this.goalx, this.goaly, this.goalwidth, this.goalheight);
    }
}

//goal objects
const Goal1 = new goal(435, 20, 150, 100)
const Goal2 = new goal(930, 20, 150, 100)

// Create two player objects
const player1 = new Player(460, 620, 30, 30, "red");
const player2 = new Player(1410, 620, 30, 30, "blue");

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
    if (keys['a']) {player1.accelerate(-acceleration, 0);}
    if (keys['d']) {player1.accelerate(acceleration, 0);}
    if (keys['w'] && player1.touchGrass) {player1.accelerate(0, -acceleration*30);}
    
    // Update player 2 (Arrow Keys)
    if (keys['ArrowLeft']) {player2.accelerate(-acceleration, 0);}
    if (keys['ArrowRight']) {player2.accelerate(acceleration, 0);}
    if (keys['ArrowUp'] && player2.touchGrass) {player2.accelerate(0, -acceleration*30);}
}

//check if player has entered goal function
function checkGoal(player: Player, goal: goal): boolean {
    
    if (player.x >= goal.goalx &&
        player.x < goal.goalx + goal.goalwidth &&
        player.y >= goal.goaly &&
        player.y < goal.goaly + goal.goalheight)
        {return true}
        else {return false}
}

function displayMessage(message: string) {
    ctx.fillStyle = 'green';
    ctx.font = '48px serif'
    ctx.fillText(message, canvas.width/2, canvas.height/2);
}


// Game loop
drawPlatforms(createPlatforms());
let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
}

function update() {
    player1.applyGravity();
    player2.applyGravity();
    updatePlayers();
    player1.updateMovement();
    player2.updateMovement();
}

function draw() {
    player1.draw();
    player2.draw();
    Goal1.draw();
    Goal2.draw();
}

function gameLoop() {
    clear();
    update();
    draw();
    if (checkGoal(player1, Goal1)) {
        displayMessage("Player 1 Win!")
    } else if (checkGoal(player2, Goal2)) {
        displayMessage("Player 2 Win!")
    }
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
