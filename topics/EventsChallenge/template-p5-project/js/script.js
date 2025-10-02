/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

//check if thr internet is down!!!!!!!!!
window.addEventListener("offline", () => {
    console.log("hello");
        lose();
});
document.addEventListener("visibilitychange", lose)
 
/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);


}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
    if (!gameOver) {//check if it is true or false
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI(); 
  //  window.addEventListener("online",);
    
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

function lose() {
    gameOver = true; // make the gameOver true
}

function keyPressed() {
    lose(); // we call lose function like we would it draw
    
}
/*
function mousePressed() {
    lose();
}

function mouseMoved() {
    lose();
}

function mouseWheel() {
    lose();
}
*/
