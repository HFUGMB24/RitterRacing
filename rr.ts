// Get the canvas element and context
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Define the player class
class Player {
    friction: number = 0.9; // Friction factor to simulate momentum

    constructor(
        public velocityY: number,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public color: string,
        public speed: number,
        public dx: number = 0,
        public dy: number = 0,
        ) { this.x = x;
            this.y = y;
            this.velocityY = 0; 
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.dx *= this.friction;
        this.dy *= this.friction;

        this.x += this.dx;
        this.y += this.dy;

        // Prevent the player from going out of bounds
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
        if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
    }

    accelerate(ax: number, ay: number) {
        this.dx += ax;
        this.dy += ay;
    }

    applyGravity() {
        const gravity = 0.5; // Adjust as needed
        this.velocityY += gravity; // Update vertical velocity
        this.y += this.velocityY; // Update character position
    }
}

// Create two player objects
const player1 = new Player(0,50, 50, 50, 50, 'blue', 5,);
const player2 = new Player(0,200, 50, 50, 50, 'red', 5,);

// Key handling
const keys: { [key: string]: boolean } = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
    a: false,
    d: false,
    w: false,
    s: false
};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function updatePlayers() {
    // Acceleration factor
    const acceleration = 0.5;

    // Update player 1 (WASD)
    if (keys['a']) player1.accelerate(-acceleration, 0);
    if (keys['d']) player1.accelerate(acceleration, 0);
    if (keys['w']) player1.accelerate(0, -acceleration);
    if (keys['s']) player1.accelerate(0, acceleration);

    // Update player 2 (Arrow Keys)
    if (keys['ArrowLeft']) player2.accelerate(-acceleration, 0);
    if (keys['ArrowRight']) player2.accelerate(acceleration, 0);
    if (keys['ArrowUp']) player2.accelerate(0, -acceleration);
    if (keys['ArrowDown']) player2.accelerate(0, acceleration);
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
    clear();
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
