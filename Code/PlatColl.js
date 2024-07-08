"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
let PlatformArray = [];
let CharLeftX = 0;
let CharLeftY = 0;
let CharRightX = 0;
let CharRightY = 0;
let CharTopX = 0;
let CharTopY = 0;
let CharBottomX = 0;
let CharBottomY = 0;
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
let Char = new Path2D;
let CharX = 10;
let CharY = 20;
Char.rect(CharX, CharY, 20, 20);
crc2.fillStyle = "indianred";
crc2.fill(Char);
let chosenCharacter = "A";
function chooseCharacter(_event) {
    chosenCharacter = _event.key;
    console.log(chosenCharacter);
}
function Movement(_event) {
    let inputKey = _event.key;
    if (inputKey == "d") {
        CharX++;
        console.log(inputKey);
    }
}
document.addEventListener("keydown", Movement);
function Stop(_event) {
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
