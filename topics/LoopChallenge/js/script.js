/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */

//hello

function draw() {
    
    
background("pink");
let strokeWeight = 0
let x = 0
let y = 0
let y2 = 0

    let startColour = color(0, 0, 128);
    let endColour = color(191, 64, 191);
  
    for (let y = 0; y < height; y++){
        let percent = y / height;
        let c = lerpColor(startColour, endColour, percent);
        stroke(c);
        line(0,y,height,y)
    }

    while (x < width) {
        
        strokeWeight = strokeWeight + 25
      
        x = x + 50
       
    stroke(strokeWeight);
    line(x, 0, x, height); 
    }

    while (y < height) {
        
        strokeWeight = strokeWeight - 0.7        
        y = y + 50
        
         stroke(strokeWeight);
    line(0,y,height,y)

    }
    
    
    





     
   
   /*
    stroke(25);
    line(50, 0, 50, height);
    
    stroke(50);
    line(100, 0, 100, height);
    
    stroke(75);
    line(150, 0, 150, height);
    
    stroke(100);
    line(200, 0, 200, height);
    
    stroke(125);
    line(250, 0, 250, height);
    
    stroke(150);
    line(300, 0, 300, height);
    
    stroke(175);
    line(350, 0, 350, height);
    
    stroke(200);
    line(400, 0, 400, height);
    
    stroke(225);
    line(450, 0, 450, height);
    
    stroke(250);
    line(500, 0, 500, height);
    */
}