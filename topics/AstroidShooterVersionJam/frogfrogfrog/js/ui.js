const goal = 30;

let score = { x: 500, y: 75, size: 100, text: 0 };
let lives = { x: 900, y: 75, size: 50, text: 3, colour: "#ff0000ff" };

let endScore = { x: 500, y: 300 };


let credit = { x: 900, y: 650, size: 30, text: 0, colour: "#ff0000ff" };

let Multiplier = 1

function drawCredit() {
    push();
    fill(credit.colour);
    textAlign(CENTER, CENTER);
    textSize(credit.size);
    text("Money: $"+credit.text, credit.x, credit.y);
    pop();


    if ((scene === "game" || scene === "freePlay" && spaceShip.laser.hit)) {
       credit.text++ * Multiplier;
    }
}

function multiplier() {
    
    if (((scene === "game" || scene === "freePlay" && spaceShip.laser.hit))) {
        if (score.text === 5) {
            Multiplier += 2;
        }
        if (score.text === 10) {
            Multiplier += 3;
        }
        if (score.text === 15) {
            Multiplier += 4;
        }
        if (score.text === 20) {
            Multiplier += 5;
        }
    }
    
Multiplier + 2
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
        spaceShip.laser.hit = false;
        resetA.speedMin += 0.5;
        resetA.speedMax += 0.5;
    }

    if (scene === "game" && score.text >= goal) {
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
    text(lives.text, lives.x, lives.y);
    pop();

    if ((scene === "game" || scene === "freePlay") && lives.text <= 0) {
        scene = "lose";
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
    text("YOU WIN " + score.text + "!", endScore.x, endScore.y);
    pop();
}
