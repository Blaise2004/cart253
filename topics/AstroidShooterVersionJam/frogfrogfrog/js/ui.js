const goal = 5;

let score = { x: 500, y: 75, size: 100, text: 0 };
let lives = { x: 900, y: 75, size: 50, text: 3, colour: "#ff0000ff" };

let endScore = { x: 500, y: 300 };


let credit = { x: 900, y: 650, size: 30, text: 0, colour: "#24da3cff" };
let multipliershow = { x: 850, y: 600, size: 30, colour: "#eec344ff" };
let Multiplier = 1;
let FakeScore = 0;
let levelCost = { x: 150, y: 500, z: 1000 };
bankCredit = 0

let showlevel = { x: 100, y: 100, size: 30, colour: "#3198e8ff" };

totalCredit = 0 

let appliedMultipliers = {
    5: false,
    15: false,
    30: false,
    60: false
};



function drawCredit() {
    push();
    fill(credit.colour);
    textAlign(CENTER, CENTER);
    textSize(credit.size);
    text("Money: $" + bankCredit, credit.x, credit.y);
    pop();


    credit.text = FakeScore * Multiplier;

console.log(bankCredit)



    
    if ((scene === "game" || scene === "freePlay")) {
   
        if (score.text >= 5 && !appliedMultipliers[5]) {
            Multiplier += 2;
            appliedMultipliers[5] = true;
        }
        if (score.text >= 15 && !appliedMultipliers[15]) {
            Multiplier += 3;
            appliedMultipliers[15] = true;
        }
        if (score.text >=30 && !appliedMultipliers[30]) {
            Multiplier += 4;
            appliedMultipliers[30] = true;
        }
        if (score.text >= 60 && !appliedMultipliers[60]) {
            Multiplier += 5;
            appliedMultipliers[60] = true;
        }
    }

    


}

 function drawMultiplier() {
    push();
    fill(multipliershow.colour);        
    textAlign(CENTER, CENTER);
    textSize(multipliershow.size);       
    text("Money Multiplier!: " + Multiplier ,  multipliershow.x, multipliershow.y);
    pop();
}

 function drawLevel() {
    push();
    fill(showlevel.colour);         
    textAlign(CENTER, CENTER);
    textSize(showlevel.size);      
    text("Level: " + level ,  showlevel.x, showlevel.y); 
    pop();
}




function drawScore() {
    push();
    fill(asteroid.colour);
    textAlign(CENTER, CENTER);
    textSize(score.size);
    text(score.text, score.x, score.y);
    pop();

    if ((scene === "game" || scene === "freePlay") && spaceShip.laser.hit) {
        score.text++;
        FakeScore++;
        
        spaceShip.laser.hit = false;
        resetA.speedMin += 0.5;
        resetA.speedMax += 0.5;
    }

    if (scene === "game" && level3Select === true && score.text >= goal) {
        scene = "end";
        sfxWinner.play();
        musicGameScene.stop();
        resetA.speedMin = resetA.baseSpeedMin;
        resetA.speedMax = resetA.baseSpeedMax;
    }
}

function drawLives() {
    push();
    fill(lives.colour);
    textAlign(CENTER, CENTER);
    textSize(lives.size);
    text("Lives: "+ lives.text, lives.x, lives.y);
    pop();

    if ((scene === "game" || scene === "freePlay") && lives.text <= 0) {
        scene = "lose";
        appliedMultipliers[5] = false;
        appliedMultipliers[15] = false;
        appliedMultipliers[30] = false;
        appliedMultipliers[60] = false;
        
        bankCredit += credit.text
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
    text("Too bad! You scored " + score.text + "!", endScore.x, endScore.y);
    pop();
}

function drawEndScore() {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("YOU WIN (i am really impressed if you made it this far..)" + "!", endScore.x, endScore.y);
    pop();
}
