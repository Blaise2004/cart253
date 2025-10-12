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

const spaceShip = {
    // The spaceShip's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The spaceShip's laser has a position, size, speed, and state
    laser: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 100,
        // Determines how the laser moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our asteroid
// Has a position, size, and speed of horizontal movement
const asteroid = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 7
};

/**
 * Creates the canvas and initializes the asteroid
 */
function setup() {
    createCanvas(1000, 700);
    // Give the asteroid its first random position
    resetAsteroid();
}

function draw() {
    drawBackground();
    star();
    moveAsteroid();
    drawAsteroid();
    moveSpaceShip();
    moveLaser();
    drawSpaceShip();
    checkLaserAsteroidOverlap();
}

function star() {
    fill("#ffffffff");
    ellipse(width / 2, height / 2, 3, 3);

}


function drawBackground() {
    background("#0f1011ff");
    
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
    fill("#000000");
    ellipse(asteroid.x, asteroid.y, asteroid.size);
    pop();
}

/**
 * Resets the asteroid to the left with a random y
 */
function resetAsteroid() {
    asteroid.x = 0;
    asteroid.y = random(0, 300);
}

/**
 * Moves the spaceShip to the mouse position on x
 */
function moveSpaceShip() {
    spaceShip.body.x = mouseX;
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
        // The laser stops if it hits the bottom
        if (spaceShip.laser.y >= height) {
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
    ellipse(spaceShip.laser.x, spaceShip.laser.y, spaceShip.laser.size);
    pop();

    // Draw the rest of the laser
    push();
    stroke("#ff0000");
    strokeWeight(spaceShip.laser.size);
    line(spaceShip.laser.x, spaceShip.laser.y, spaceShip.body.x, spaceShip.body.y);
    pop();

    // Draw the spaceShip's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(spaceShip.body.x, spaceShip.body.y, spaceShip.body.size);
    pop();
}

/**
 * Handles the laser overlapping the asteroid
 */
function checkLaserAsteroidOverlap() {
    const d = dist(spaceShip.laser.x, spaceShip.laser.y, asteroid.x, asteroid.y);
    const hit = (d < spaceShip.laser.size / 2 + asteroid.size / 2);
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