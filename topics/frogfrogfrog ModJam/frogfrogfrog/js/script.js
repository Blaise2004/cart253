/**
 * SpaceMiner
 * Blaise Treverton
 * 
 * A game of mining astroids
 * 
 * Instructions:
 * - Move the Space ship with your mouse
 * - Click to launch the laser
 * - Mine the Astroids
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
let gameScreen = true; // start with game screen off

const spaceShip = {
    // The spaceShip's body has a position and size
    body: {
        x: 500,
        y: 650,
        size: 45
    },
    // The spaceShip's laser has a position, size, speed, and state
    laser: {
        x: undefined,
        y: 650,
        size: 10,
        speed: 70,
        // Determines how the laser moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let farStars = [];
let nearStars = [];

let target = {
    x:500,
    y:350,
size: 50
}






// Our asteroid
// Has a position, size, and speed of horizontal movement
let asteroid = {
    x: 0,
    y: 200, // Will be random
    size: 30,
    speed: 7,
    colour: "#383838ff"
    
};

/**
 * Creates the canvas and initializes the asteroid
 */
function setup() {
    createCanvas(1000, 700);
    
    // generate star positions once
  for (let i = 0; i < 750; i++) {
    farStars.push({
      x: random(width),
      y: random(height),
        size: random(1, 2),
      speed:random(0.1,0.6)
    });
  }
    
     for (let i = 0; i < 100; i++) {
    nearStars.push({
      x: random(width),
      y: random(height),
        size: random(3, 8),
      speed:random(0.5,1)
    });
  }
    // Give the asteroid its first random position
    resetAsteroid();
}

function draw() {
    
    if (gameScreen === true) {
        noCursor();
        drawBackground();
        moveAsteroid();
        drawAsteroid();
        moveSpaceShip();
        moveLaser();
        drawSpaceShip();
        checkLaserAsteroidOverlap();
        drawTarget();
        moveTarget();
    }
}


function drawBackground() {
    background("#0f1011ff");
     // draw stars every frame, but positions don’t change
  noStroke();
  fill(255);
    for (let star of farStars) {
        star.x += star.speed // random speed
        if (star.x > width) {
            star.x = 0 
            star.y = random(height)
        }
     ellipse(star.x, star.y, star.size, star.size);
 }
   for (let stars of nearStars) {
       stars.x += stars.speed // random speed
        if (stars.x > width) {
            stars.x = 0 
            stars.y = random(height)
        }
       ellipse(stars.x, stars.y, stars.size, stars.size); 

 }

   
}



/**
 * Moves the asteroid according to its speed
 * Resets the asteroid if it gets all the way to the right
 */
function moveAsteroid() {
    asteroid.x += asteroid.speed;
    if (asteroid.x > width) {
        resetAsteroid();
    }
}

/**
 * Draws the asteroid as a black circle
 */
function drawAsteroid() {
    push();
    noStroke();
    fill(asteroid.colour);
    ellipse(asteroid.x, asteroid.y, asteroid.size);
    pop();

}

/**
 * Resets the asteroid to the left with a random y
 */
function resetAsteroid() {
    asteroid.x = -300;
    asteroid.y = random(0, height - height / 3);
    asteroid.size = random(20, 100)
    asteroid.speed = random(1.9, 3)
    
    let grey = map(random(), 0, 1, 56, 186);
    asteroid.colour = color(grey); // proper p5 color


}

/**
 * Moves the spaceShip to the mouse position on x
 */
function moveSpaceShip() {
    spaceShip.body.x = mouseX;
}
function drawTarget() {
    noFill();
    stroke("#ff0000")
    strokeWeight(0.5);
    ellipse(target.x, target.y, target.size, target.size);
    line(target.x - target.size, target.y, target.x + target.size, target.y)
    line(target.x, target.y - target.size, target.x, target.y + target.size); // vertical
}

function moveTarget() {
    target.x = mouseX
    target.y = mouseY
}
/**
 * Handles moving the laser based on its state
 */
function moveLaser() {
    // Laser matches the spaceShip's x
    spaceShip.laser.x = spaceShip.body.x;
    if (spaceShip.laser.state === "idle") {
        // Do nothing
    } else if (spaceShip.laser.state === "outbound") {
        spaceShip.laser.y += -spaceShip.laser.speed;
        // The laser bounces back if it hits the top
        if (spaceShip.laser.y <= 0) {
            spaceShip.laser.state = "inbound";
        }
    } else if (spaceShip.laser.state === "inbound") {
        spaceShip.laser.y += spaceShip.laser.speed;
        // The laser stops if it hits the spceship body
        if (spaceShip.laser.y >= spaceShip.body.y-spaceShip.body.size/2) {
            spaceShip.laser.state = "idle";
        }
    }
}

/**
 * Displays the laser (tip and line connection) and the spaceShip (body)
 */
function drawSpaceShip() {
    // Draw the laser tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(spaceShip.laser.x, spaceShip.body.y, spaceShip.laser.size);//draw the first frame of laser tip at the centreof the spaceship
    pop();

    // Draw the rest of the laser
    push();
    stroke("#4e0606ff");
    strokeWeight(spaceShip.laser.size);
    line(spaceShip.laser.x, spaceShip.laser.y, spaceShip.body.x, spaceShip.body.y);
    pop();

    // Draw the spaceShip's body
    push();
    fill("#2f556eff");
    noStroke();
    ellipse(spaceShip.body.x, spaceShip.body.y, spaceShip.body.size);
    triangle(
        spaceShip.body.x - spaceShip.body.size/2, spaceShip.body.y,
         spaceShip.body.x - spaceShip.body.size/4, spaceShip.body.y,
        spaceShip.body.x - spaceShip.body.size / 2.5, spaceShip.body.y - spaceShip.body.size
    );
//left wing
     triangle(
        spaceShip.body.x, spaceShip.body.y+ spaceShip.body.size/2,
         spaceShip.body.x, spaceShip.body.y,
        spaceShip.body.x - spaceShip.body.size*1.2, spaceShip.body.y
    );
    
        triangle(
  spaceShip.body.x + spaceShip.body.size / 2, spaceShip.body.y,
  spaceShip.body.x + spaceShip.body.size / 4, spaceShip.body.y,
  spaceShip.body.x + spaceShip.body.size / 2.5, spaceShip.body.y - spaceShip.body.size
        );
   
   // right wing
triangle(
  spaceShip.body.x, spaceShip.body.y + spaceShip.body.size / 2,
  spaceShip.body.x, spaceShip.body.y,
  spaceShip.body.x + spaceShip.body.size * 1.2, spaceShip.body.y
);
  
    //backofSpaceshi
    triangle(
  spaceShip.body.x -spaceShip.body.size/1.5, spaceShip.body.y,
  spaceShip.body.x +spaceShip.body.size/1.5, spaceShip.body.y,
  spaceShip.body.x, spaceShip.body.y + spaceShip.body.size
);
    
    pop();
}

/**
 * Handles the laser overlapping the asteroid
 */
function checkLaserAsteroidOverlap() {
    const d = dist(spaceShip.laser.x, spaceShip.laser.y, asteroid.x, asteroid.y);
    const hit = (d <  spaceShip.laser.size/2 + asteroid.size / 2);
    if (hit) {
        resetAsteroid();
        spaceShip.laser.state = "inbound";
    }
}

/**
 * Launch the laser on click (if it's not launched yet)
 */
function mousePressed() {
    if (spaceShip.laser.state === "idle") {
        spaceShip.laser.state = "outbound";
    }
}