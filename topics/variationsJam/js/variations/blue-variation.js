/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */



let resolution = {
    X: 50,
    Y:50
}
function initializeVideoCapture(){
    capture = createCapture(VIDEO);
     capture.size(resolution.X, resolution.Y);
    capture.hide(); // Mkaes it only appeare in the Java Script, Not the HTML as well.b
}



function blueSetup() {
initializeVideoCapture();
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
   //b background("blue");
    image(capture, 0, 0, Canvas.X, Canvas.Y); // Display the Video Stream In Draw. Display
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