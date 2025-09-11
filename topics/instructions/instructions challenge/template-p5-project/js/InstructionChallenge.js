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
    background("#202425ff"); //sky colour
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();
   // stroke(10);
    fill("#1a7027dd"); // ground colour
    rect(0, 400, 800, 300); 
    pop();

    //draw all buildings:
    skyScaper1();
    skyScaper2();
    skyScaper3();
    wheel1();
    moon();
    road();
}

function skyScaper1() { 
    fill("#585858ff");
    rect(100, 200, 80, 200);
    push();
    fill("#edb91eff");
    
    rect(110, 210, 10, 10);//first row windows
    rect(110, 230, 10, 10);
    rect(110, 250, 10, 10);
    rect(110, 270, 10, 10);
    rect(110, 290, 10, 10);
    rect(110, 310, 10, 10);
    rect(110, 330, 10, 10);
    rect(110, 350, 10, 10);

     rect(130, 210, 10, 10);//second row
    rect(130, 230, 10, 10);
    rect(130, 250, 10, 10);
    rect(130, 270, 10, 10);
    rect(130, 290, 10, 10);
    rect(130, 310, 10, 10);
    rect(130, 330, 10, 10);
     rect(130,350, 10, 10);

}

function skyScaper2() { 
    fill("#d17f20ff");
    rect(200, 100, 80, 300);
}

function skyScaper3() { 
    fill("#4b32c4ff");
    triangle(300, 400, 400 , 400, 350, 100);
}


function wheel1() { 
    fill("#6a6a6a62");
    ellipse(500, 300, 150);
    push();
      strokeWeight(4);
    line(500, 300, 420, 400);
    line(500, 300, 580, 400);
    pop();
}

function moon() {
   fill("#bdc3a5ff");
    ellipse(600, 100, 200, 200);
    push();
    noStroke();  
    fill("#5c5f5658");
    ellipse(600, 150, 20, 20);
    ellipse(650, 100, 50, 50);
    ellipse(550, 80, 50   , 50);
    pop();
}

function road() { 
    fill("#585858ff");
    rect(0, 430, width, 100);
}