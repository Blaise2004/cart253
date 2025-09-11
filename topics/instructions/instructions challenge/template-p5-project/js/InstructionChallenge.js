/**
 * Instruction Challenge
 * Blaise Treverton
 * 
 * Trying to make a self portrait 
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
    background("#b0deeeff");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();
    stroke(2);
    fill("#1a7027dd");
    rect(0, 400, 800, 300);
    pop();

    skyScaper1();
    skyScaper2();
    skyScaper3();
    skyScaper4();
}

function skyScaper1() { 
    fill("#585858ff");
    rect(100, 200, 80, 200);
}

function skyScaper2() { 
    fill("#d17f20ff");
    rect(200, 100, 80, 300);
}

function skyScaper3() { 
    fill("#4b32c4ff");
    triangle(300, 400, 400 , 400, 350, 100);
}

function skyScaper4() { 
    fill("#b3c432ff");
    ellipse(500, 400, 100);
}