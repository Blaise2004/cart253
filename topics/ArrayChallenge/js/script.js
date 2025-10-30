/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let ball1 = undefined; // Will create it with createBall()
let ball2 = undefined;
 let balls = []
    console.log (balls.length)
/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    ball1 = createBall();
    ball2 = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
    
    throwStrength = mouseX - pmouseX;
    throwStrengthY = mouseY - pmouseY;
    let newBall = {
        
    
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: throwStrength*0.1,
            y: throwStrengthY*0.1
        }
    }
    return newBall;
}
    


/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");
    
    for (let forBall of balls)
    {
        moveBall(forBall);
        bounceBall(forBall);
        drawBall(forBall);
    }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(placeholderball) {
    placeholderball.x += placeholderball.velocity.x;
    placeholderball.y += placeholderball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(placeHolderbounceball) {
    // Check if the ball has reached the left or right
    const bounceX = (placeHolderbounceball.x > width || placeHolderbounceball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (placeHolderbounceball.y > height || placeHolderbounceball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        placeHolderbounceball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        placeHolderbounceball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(placeholderdraw) {
    push();
    noStroke();
    fill(placeholderdraw.fill);
    ellipse(placeholderdraw.x, placeholderdraw.y, placeholderdraw.size);
    pop();
}


function mousePressed(){
    let a = createBall();
    balls.push(a)
    console.log(balls)
    console.log(pmouseX)
    console.log(mouseX)
    console.log(throwStrength)

}