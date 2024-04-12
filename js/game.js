let canvas;
let world;
let keyboard = new Keyboard();



/**
 * Initializes the touch elements, the canvas & starts the Game.
 */

function initGame() {
    keyboard.touchBoardPress();
    canvas = document.getElementById('canvas');
    startGame();
    initLevel();
    world = new World(canvas, keyboard);

}








