/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */


const density = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'

/*
# Source - https://stackoverflow.com/a
# Posted by Ahsen Khan, modified by community. See post 'Timeline' for change history
# Retrieved 2025-11-25, License - CC BY-SA 4.0

$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.
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
   background(220)
    pixelArray();
    
    
    
}


function pixelArray(  ) {

    image(capture, 0, 0, Canvas.X, Canvas.Y); // Display the Video Stream In Draw. Display
    
    let w = Canvas.X / resolution.X;
    let h = Canvas.Y / resolution.Y

 capture.loadPixels();

 for (let i = 0; i < resolution.X; i++) {
    for (let j = 0; j < resolution.Y; j++) {
            const pixelIndex = (i + j * resolution.X) * 4; //The *4 is because each pixel has 4 values: R, G, B, A.
            const r = capture.pixel[pixelIndex + 0]; 
            const g = capture.pixel[pixelIndex + 1];
            const b = capture.pixel[pixelIndex + 2]; 

            noStroke();
            fill(r, g, b)
            square(i*w,j*h,w)
        }
    }
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
