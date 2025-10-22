/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 2
    }
};

const ball2 = {
    x: 400,
    y: 30,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 3
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};
const paddle2 = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};
/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
     movePaddle(paddle2);
    moveBall(ball);
    moveBall(ball2);
   
    
    handleBounce(ball, paddle);
     handleBounce(ball2, paddle);
    handleBounce(ball2, paddle2);
    handleBounce(ball, paddle2);
    
    
    
    
    drawPaddle(paddle);
    drawPaddle(paddle2);
    drawBall(ball);
    drawBall(ball2);
    
    
    checkOverlap(ball, paddle);
    checkOverlap(ball2,paddle2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
paddle.x = mouseX
paddle2.x = mouseY
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
ball.y += ball.velocity.y
}


/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {


    const overlap = checkOverlap(ball, paddle);
    if (overlap) {
        ball.velocity.y *= -1;

    }
    if (ball.y < 0) {
        ball.y= 0
        ball.velocity.y *= -1;
        console.log (ball.y)
    }
    
}





/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    fill("pink");
    
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}