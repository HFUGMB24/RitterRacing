let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Platform {
    path: Path2D,
}

let PlatformArray: Platform[] = [];

let CharLeftX: number = 0;
let CharLeftY: number = 0;
let CharRightX: number = 0;
let CharRightY: number = 0;
let CharTopX: number = 0;
let CharTopY: number = 0;
let CharBottomX: number = 0;
let CharBottomY: number = 0;

/*
function PlatformCollision() {
    for (let i:number = 0; i < PlatformArray.length; i++) {
        if (crc2.isPointInPath(PlatformArray[i].path, CharLeftX, CharLeftY) == true) {

        }
    }

    for (let j:number = 0; j < PlatformArray.length; j++) {
        if (crc2.isPointInPath(PlatformArray[j].path, CharRightX, CharRightY) == true) {
    
        }
    }

    for (let i:number = 0; i < PlatformArray.length; i++) {
        if (crc2.isPointInPath(PlatformArray[i].path, CharTopX, CharTopY) == true) {

        }
    }

    for (let i:number = 0; i < PlatformArray.length; i++) {
        if (crc2.isPointInPath(PlatformArray[i].path, CharBottomX, CharBottomY) == true) {

        }
    }
}
*/

let Char: Path2D = new Path2D;
let CharX: number = 10;
let CharY: number = 20;

Char.rect(CharX, CharY, 20, 20);
crc2.fillStyle = "indianred";
crc2.fill(Char);

let chosenCharacter: string = "A";
function chooseCharacter(_event: KeyboardEvent): void {
    chosenCharacter = _event.key;
    console.log(chosenCharacter);
}

function Movement(_event: KeyboardEvent): void {
    let inputKey: string = _event.key;
    if (inputKey == "d") {
        CharX++;
        console.log(inputKey);
    }
}

document.addEventListener("keydown", Movement);

function Stop(_event: KeyboardEvent): void {

}

/*
export class KeyboardManager {

    private static keyDown = (event: KeyboardEvent) => {
        if (event.key === 'w') {
            
        }
        
        if (event.key === 's') {

        }
        
        if (event.key === 'a') {

        }
        
        if (event.key === 'd') {
            CharX++;
        }
    }
  
    private static keyUp = (event: KeyboardEvent) => {
        if (event.key === 'w') {

        }
        
        if (event.key === 's') {

        }
        
        if (event.key === 'a') {

        }
        
        if (event.key === 'd') {

        }
    }
  
    constructor() {
      document.body.addEventListener('keydown', KeyboardManager.keyDown)
      document.body.addEventListener('keyup', KeyboardManager.keyUp)
    }
  }*/