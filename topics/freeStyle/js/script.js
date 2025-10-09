/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let timer = {
    startTime: 0,
    timePassed: 0,
    timeInterval:10000

}
let finishState = "none"

let gameState = "start";
let score = 0;

function setup() {
    createCanvas(500, 500)
    background(0);
    setTimeout(startTheGame,5000)
}

//event handler for timer
function startTheGame() {
    gameState = "play";
    timer.startTime = millis();

}

function draw() {
    if (gameState === "start") {
        startScreen();
    }
    else if (gameState === "play"){
        gameScreen();
      
    }
    else if (gameState === "end") {
        endScreen();
        }


}
//start screen 
function startScreen() {
    background("#54b9b9ff");
  
}


//game screen
function gameScreen() { 
 
    background("#54b95cff");
     displayRect();
    displayScore();
    displayTimer();
    timer.timePassed = millis() - timer.startTime;
    if (timer.timePassed > timer.timeInterval) {
        gameState="end"
    }
    if (score >= 10) {
        finishState = "win"
    }
    else {
        finishState = "lose"
    }
}



//end Screen 
function endScreen() {
    background("#b99054ff");

}




function mousePressed() {
    if (gameState === "play") {
        if (mouseX < width / 3) {
            score++;
            console.log(score);
        }else {
            score--;
        }
    }
}
    function displayRect() {
         push();
    textSize(24);
    fill(255);
    rect(0,0 , width/3, height,)
    pop();

  }



function displayScore() {
    
    push();
    textSize(24);
    fill(255);
    text(score, width - 150, 50);
    pop();
   
}

function displayTimer() {
    
    push();
    textSize(24);
    fill(255);
    text(10 - floor(timer.timePassed/1000), width - 150, 120);
    pop();
   
}
