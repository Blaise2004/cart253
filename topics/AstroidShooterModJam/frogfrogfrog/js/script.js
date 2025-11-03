/**
 * SpaceShooter
 * Blaise Treverton
 * 
 * A game of shooting astroids
 * 
 * Instructions:
 * - Move the Space ship with your mouse
 * - Click to launch the laser
 * - Mine the Astroids
 * -Get a score of 20 and you win!
 * - You have 3 Lives
 * - fee Play is optional after you win!
 * 
 * Made with p5 r
 * https://p5js.org/
 */

"use strict";
let scene = "start"; 

// SOUND VARIABLES
let sfxFire;
let sfxHitAsteroid;
let sfxLoseLife;
let sfxGameOver;
let musicGameScene;
let sfxWinner;

let startButtons = {

    x: 500,
    y: 350,
    width:100,
    height:  50,

}
let loseButtons = {

    x: 500,
    y: 350,
    width:100,
    height:  50,

}

let freePlayButton = {

    x: 500,
    y: 350,
    width:100,
    height:  50,

}
 
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
        state: "idle", // State can be: idle, outbound, inbound
        hit: false
    }
};

const startShip = {
    // The spaceShip's body has a position and size
    body: {
        x: 500,
        y: 350,
        size: 300
    },
}


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
    colour: "#383838ff",


}

let resetA = {
    x: -300,
    sizeMin: 40,
    sizeMax: 160,
    speedMin: 1.9,
    speedMax: 3,
     baseSpeedMin: 1.9,
    baseSpeedMax: 3
}


let score = {

    x: 500,
    y: 75,
    size: 100,
    text: 0  

}

let lives = {
    
    x: 900,
    y: 75,
    size: 50,
    text:3,
    colour: "#ff0000ff"

}

let endScore = {

 x: 500,
 y: 300,


}


function preload() {
  soundFormats('mp3', 'wav'); 
  sfxFire = loadSound('assets/sounds/fire.wav');
  sfxHitAsteroid = loadSound('assets/sounds/hitAstroid.wav');
  sfxLoseLife = loadSound('assets/sounds/loseLife.wav');
  sfxGameOver = loadSound('assets/sounds/gameOver.wav');
    musicGameScene = loadSound('assets/sounds/gameScene.mp3');
    sfxWinner = loadSound('assets/sounds/winner.mp3');
}


function setup() {
    createCanvas(1000, 700);
    
    sfxHitAsteroid.setVolume(0.4);
    musicGameScene.setVolume(0.8);
    sfxLoseLife.setVolume(1.5);
    // generate star positions once
  for (let i = 0; i < 400; i++) {
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
   
    if (scene === "start") {
        noCursor();
        drawBackground();
        drawStartShip()
        drawStartButton();
        drawGoal();
        drawTarget();
        moveTarget();
        buttonHover();
        
       
    }
    else if (scene === "game") {
        noCursor();
        drawBackground();
        drawSpeedAstroid()
        moveAsteroid();
        drawAsteroid();
        moveSpaceShip();
        moveLaser();
        drawSpaceShip();
        checkLaserAsteroidOverlap();
        drawTarget();
        moveTarget();
        drawScore();
        drawLives();
    }
    else if (scene === "lose") {
        
        noCursor();
        drawBackground();
        drawStartShip();
        moveTarget();
        drawLoseScore();
        drawloseButton();
        drawTarget();
        
    }

    else if (scene === "end") { 
        noCursor();
        drawBackground();
        drawStartShip();
        drawEndScore();
        drawFreePlayButton();
        drawTarget();
        moveTarget();
       
    }
    else if (scene === "freePlay") {
        noCursor();
        drawBackground();
        moveAsteroid();
        drawAsteroid();
        drawSpeedAstroid()
        moveSpaceShip();
        moveLaser();
        drawSpaceShip();
        checkLaserAsteroidOverlap();
        drawTarget();
        moveTarget();
        drawScore();
        drawLives();
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

function drawStartButton() {
    push();
    rectMode(CENTER); // draw rectangle from its center
    fill("#4e90ff");  // choose any color
    noStroke();
    rect(startButtons.x, startButtons.y, startButtons.width, startButtons.height); // width:100, height:50
    pop();

    push();

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("START",startButtons.x,startButtons.y)
    pop();
    
}
function drawGoal(){
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("AIM: DESTROY 20 ASTROIDS",startButtons.x,startButtons.y+50)
    pop();
}


function buttonHover() {
   
    let baseButtonWidth = 100;
    let baseButtonHeight = 50;
    
    const d = dist(mouseX, mouseY, startButtons.x, startButtons.y);
    const hover = (d < startButtons.width/2 );
    if (hover) {
        startButtons.width = baseButtonWidth + 10
        startButtons.height = baseButtonHeight + 10
    }
    else {
        startButtons.width = baseButtonWidth;
        startButtons.height = baseButtonHeight;
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
        lives.text -= 1;
        sfxLoseLife.play();
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
    asteroid.x = resetA.x;
    asteroid.y = random(0, height - height / 3);
    asteroid.size = random(resetA.sizeMin, resetA.sizeMax)
    asteroid.speed = random(resetA.speedMin, resetA.speedMax)
    asteroid.shrinking = false; // make sure it's alive again
    
    let grey = map(random(), 0, 1, 56, 186);
    asteroid.colour = color(grey); // proper p5 color


}
function drawSpeedAstroid() {
    asteroid.speed
     fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Asteroid Speed: " + Math.round(asteroid.speed), 100, 30);
    pop();
    
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

function drawStartShip() {
   
   
    // Draw the ship's body
    push();
    fill("#2f556eff");
    noStroke();
    ellipse(startShip.body.x, startShip.body.y, startShip.body.size);

    // Left triangle
    triangle(
        startShip.body.x - startShip.body.size / 2, startShip.body.y,
        startShip.body.x - startShip.body.size / 4, startShip.body.y,
        startShip.body.x - startShip.body.size / 2.5, startShip.body.y - startShip.body.size
    );

    // Left wing
    triangle(
        startShip.body.x, startShip.body.y + startShip.body.size / 2,
        startShip.body.x, startShip.body.y,
        startShip.body.x - startShip.body.size * 1.2, startShip.body.y
    );

    // Right triangle
    triangle(
        startShip.body.x + startShip.body.size / 2, startShip.body.y,
        startShip.body.x + startShip.body.size / 4, startShip.body.y,
        startShip.body.x + startShip.body.size / 2.5, startShip.body.y - startShip.body.size
    );

    // Right wing
    triangle(
        startShip.body.x, startShip.body.y + startShip.body.size / 2,
        startShip.body.x, startShip.body.y,
        startShip.body.x + startShip.body.size * 1.2, startShip.body.y
    );

    // Back of the ship
    triangle(
        startShip.body.x - startShip.body.size / 1.5, startShip.body.y,
        startShip.body.x + startShip.body.size / 1.5, startShip.body.y,
        startShip.body.x, startShip.body.y + startShip.body.size
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
         spaceShip.laser.hit = true
        resetAsteroid();
        sfxHitAsteroid.play();
        spaceShip.laser.state = "inbound";
        
    }
}

/**
 * Launch the laser on click (if it's not launched yet)
 */
function mousePressed() {
  
    const d = dist(mouseX, mouseY, startButtons.x, startButtons.y);
  const hover = (d < startButtons.width / 2);

    const loseD = dist(mouseX, mouseY, loseButtons.x, loseButtons.y);
    const loseHover = (loseD < loseButtons.width / 2);
    
     const freeD = dist(mouseX, mouseY, freePlayButton.x, freePlayButton.y);
  const freeHover = (freeD < freePlayButton.width / 2);
    
  // If we're on the start screen and clicked the button
  if (scene === "start" && hover) {
      
      scene = "game"
      musicGameScene.loop();
        console.log("start clicked!");
  }
    
    

  // If we're on the start screen and clicked the button
 if (scene === "lose" && loseHover) {
   // Reset player stats
   lives.text = 3;       // back to full lives
   score.text = 0;       // restart score
   resetAsteroid();      // reposition the asteroid
   spaceShip.laser.state = "idle";  // reset laser

     scene = "game";
      musicGameScene.loop();
   console.log("Try again clicked!");
}

    if (scene === "end" && freeHover) {
        
        lives.text = 3;       // back to full lives
        score.text = 0;       // restart score
        scene = "freePlay"
        musicGameScene.loop();
    }    

  // If we're in the game and laser is idle, fire it
  if ((scene === "game" || scene === "freePlay") && spaceShip.laser.state === "idle") {
      spaceShip.laser.state = "outbound";
      sfxFire.play();
  }
    
}

function drawScore() {
    
  push();
    fill(asteroid.colour);
    textAlign(CENTER, CENTER);
    textSize(score.size);
    text(score.text, score.x,score.y)
    pop();
 
 // At the end of drawScore() or draw():
if ((scene === "game" || scene === "freePlay") && spaceShip.laser.hit) {
    score.text++;          // register the hit
    spaceShip.laser.hit = false; // now reset for the next frame
    resetA.speedMin = resetA.speedMin + 0.5
    resetA.speedMax = resetA.speedMax + 0.5
    console.log(resetA.speedMin);
}
    if (scene === "game" && score.text >= 20) {
        scene = "end"
        sfxWinner.play();
        musicGameScene.stop();
        resetA.speedMin = resetA.baseSpeedMin;
        resetA.speedMax = resetA.baseSpeedMax;
    }
}
function drawLives() {
    
    push()
    fill(lives.colour);
    textAlign(CENTER, CENTER);
    textSize(lives.size);
    text(lives.text, lives.x, lives.y);
    pop();

    if (scene === "game" && lives.text <=0) { 
    scene = "lose"
        sfxGameOver.play();
        musicGameScene.stop();
        resetA.speedMin = resetA.baseSpeedMin;
        resetA.speedMax = resetA.baseSpeedMax;
    }
    if (scene === "freePlay" && lives.text <= 0) {
        scene = "lose"
        sfxGameOver.play();
        musicGameScene.stop();
        resetA.speedMin = resetA.baseSpeedMin;
        resetA.speedMax = resetA.baseSpeedMax;

 }

}

function drawLoseScore() {
    
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Too bad! You scored " + score.text + "!",endScore.x,endScore.y)
    pop();
    


}
function drawloseButton(){
 push();
rectMode(CENTER); // draw rectangle from its center
fill("#4e90ff");  // choose any color
noStroke();
rect(loseButtons.x, loseButtons.y, loseButtons.width, loseButtons.height); // width:100, height:50
pop();

push();
fill(255);
textAlign(CENTER, CENTER);
textSize(20);
text("TryAgain!", loseButtons.x, loseButtons.y);
pop();

}
    
function drawEndScore() {

    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("YOU WIN" + score.text + "!",endScore.x,endScore.y)
    pop();

}

function drawFreePlayButton() {
  // Draw the "Free Play" button
push();
rectMode(CENTER); // draw rectangle from its center
fill("#4e90ff");  // button color
noStroke();
rect(freePlayButton.x, freePlayButton.y, freePlayButton.width, freePlayButton.height); // width:100, height:50
pop();

push();
fill(255); // text color
textAlign(CENTER, CENTER);
textSize(20);
text("Free Play", freePlayButton.x, freePlayButton.y);
pop();
}