/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */

let capture

function videoIn(){
    capture = createCapture(VIDEO);
    capture.size(Canvas.X, Canvas.Y);
      capture.hide();
}



function blueSetup() {
videoIn();
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
   //b background("blue");
    image(capture, 0, 0, Canvas.X, Canvas.Y);
}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function blueKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {

}