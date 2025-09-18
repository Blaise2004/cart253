/**
 * Mr. Furious
 * Blaise Treverton
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
      r: 255,
    g: 225,
    b: 225
  }
};

let skycolor = {

    fill: {
    
        r: 160,
        g: 180,
        b: 200
    }
}

let birdProperties = {

    
    X: 30,
    Y: 200,
    speed: 2,
    velocityX: 1,
    velocityY: 1,
  
    fill: {
        r: 64,
        g: 224,
        b: 208
    
    }
}

let rage = {

    min: -5,
    max: 5
}


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    skycolor.fill.r = skycolor.fill.r - 1;
    skycolor.fill.g = skycolor.fill.g - 1;
    skycolor.fill.b = skycolor.fill.b - 1;
    skycolor.fill.b = constrain(skycolor.fill.b, 139, 200);
    
    background(skycolor.fill.r, skycolor.fill.g, skycolor.fill.b);
    
    
    mrFurious.fill.g = mrFurious.fill.g - 1;
  mrFurious.fill.b = mrFurious.fill.b - 1;
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  
    
    rage.min = rage.min - 0.1
    rage.max = rage.max + 0.1
    mrFurious.x = constrain(mrFurious.x, 30, 380);
    mrFurious.x = mrFurious.x + random(rage.min , rage.max);
    
    

    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
    
    bird();
}

function bird() {
    birdProperties.X = birdProperties.X + birdProperties.velocityX;
    birdProperties.X = constrain(birdProperties.X, 30, 300);
    birdProperties.Y = birdProperties.Y - birdProperties.velocityY
    birdProperties.Y = constrain(birdProperties.Y, 100, 250); 
    push();
    fill(birdProperties.fill.r, birdProperties.fill.g, birdProperties.fill.b);
    rect(birdProperties.X, birdProperties.Y, 50, 20);
    pop();







}