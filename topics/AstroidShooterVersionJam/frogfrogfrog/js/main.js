"use strict";

// (Controls scenes, setup, draw, mouse input)

let scene = "start";
let level = "level0";



function setup() {
    createCanvas(1000, 700);

    sfxHitAsteroid.setVolume(0.4);
    musicGameScene.setVolume(0.8);
    sfxLoseLife.setVolume(1.5);

    for (let i = 0; i < 400; i++) {
        farStars.push({
            x: random(width),
            y: random(height),
            size: random(1, 2),
            speed: random(0.1, 0.6)
        });
    }

    for (let i = 0; i < 100; i++) {
        nearStars.push({
            x: random(width),
            y: random(height),
            size: random(3, 8),
            speed: random(0.5, 1)
        });
    }

    resetAsteroid();
}

function draw() {
    if (scene === "start") {
        noCursor();
        drawBackground();
        drawStartShip();
        drawStartButton();
        draweasyButton();
        drawhardButton();
        drawImpossibleButton();
        drawGoal();
        drawCredit();
        drawLevel();
        drawTarget();
        moveTarget();
        buttonHover();

        
    } 
    else if (scene === "game") {
        noCursor();
        drawBackground();
        drawSpeedAstroid();
        moveAsteroid();
        drawAsteroid();
        moveSpaceShip();
        moveLaser();
        drawSpaceShip();
        checkLaserAsteroidOverlap();
        drawCredit();
        drawLevel();
        drawMultiplier();
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
          draweasyButton();
        drawhardButton();
        drawImpossibleButton();
        drawCredit();
        drawLevel();
        drawTarget();
        buttonHover()
    } 
    else if (scene === "end") {
        noCursor();
        drawBackground();
        drawStartShip();
        drawEndScore();
        drawFreePlayButton();
        drawCredit();
        drawLevel();
        drawTarget();
        moveTarget();
    } 
    else if (scene === "freePlay") {
        noCursor();
        drawBackground();
        moveAsteroid();
        drawAsteroid();
        drawSpeedAstroid();
        moveSpaceShip();
        moveLaser();
        drawSpaceShip();
        checkLaserAsteroidOverlap();
        drawCredit();
        drawLevel();
        drawMultiplier();
        drawTarget();
        moveTarget();
        drawScore();
        drawLives();
    }
}

function drawGoal() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("AIM: DESTROY " + goal + " ASTEROIDS", startButtons.x, startButtons.y + 50);
}

function mousePressed() {
    const startD = dist(mouseX, mouseY, startButtons.x, startButtons.y);
    const loseD  = dist(mouseX, mouseY, loseButtons.x, loseButtons.y);
    const freeD = dist(mouseX, mouseY, freePlayButton.x, freePlayButton.y);
    
    const easyD = dist(mouseX, mouseY, easyButton.x, easyButton.y);
    const hardD = dist(mouseX, mouseY, hardButton.x, hardButton.y);
    const impossibleD = dist(mouseX, mouseY, impossibleButton.x, impossibleButton.y);

    if (scene === "start" || scene === "lose") {

        //easy button logic
        if (easyD < easyButton.width / 2 && credit.text  >= levelCost.x) {
            level = "level1";
            easyText = "Selected"
            hardText = ""
            impossibleText = ""
            FakeScore -= levelCost.x;
            sfxBuy.play();
        }
       if (easyD < easyButton.width / 2 && credit.text < levelCost.x) {
           credit.colour = "#ff0000ff"; 
           sfxLoseLife.play();  
        setTimeout(() => {credit.colour = "#24da3cff"; }, 2000); 
       }
        
        //hard button logic
        if (hardD < hardButton.width / 2 && credit.text  >= levelCost.y) {
            level = "level2";
             easyText = ""
            hardText = "Selected"
            impossibleText = ""
            FakeScore -= levelCost.y;
            sfxBuy.play();
        }
        if (hardD < hardButton.width / 2 && credit.text < levelCost.y) {
            credit.colour = "#ff0000ff";
            sfxLoseLife.play();
            setTimeout(() => { credit.colour = "#24da3cff"; }, 2000);
        }

        //impossible button logic
        if (impossibleD < impossibleButton.width / 2 && credit.text >= levelCost.z) {
            level = "level3";
            easyText = ""
            hardText = ""
            impossibleText = "Selected"
            FakeScore -= levelCost.z;
            sfxBuy.play();
        }
         if (impossibleD < impossibleButton.width / 2 && credit.text < levelCost.z) {
            credit.colour = "#ff0000ff";
            sfxLoseLife.play();
            setTimeout(() => { credit.colour = "#24da3cff"; }, 2000);
        }
    }
    
    // Start button
    if (scene === "start" && startD < startButtons.width / 2) {
        scene = "game";

       if (level === "level1") {
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.stop();
            musicGameScene.loop();
        } else if (level === "level2") {
            musicGameScene.stop();
            musicGameSceneLevel3.stop();
            musicGameSceneLevel2.loop();
        } else if (level === "level3") {
            musicGameScene.stop();
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.loop();
        }
    }

    if (scene === "lose") {
        musicGameScene.stop();
        musicGameSceneLevel2.stop();
        musicGameSceneLevel3.stop();
    }
    if (scene === "lose" && loseD < loseButtons.width / 2) {

          

       
        lives.text = 3;
        score.text = 0;
     
        resetAsteroid();
        spaceShip.laser.state = "idle";
            
        scene = "game";

        if (level === "level1") {
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.stop();
            musicGameScene.loop();
        } else if (level === "level2") {
            musicGameScene.stop();
            musicGameSceneLevel3.stop();
            musicGameSceneLevel2.loop();
        } else if (level === "level3") {
            musicGameScene.stop();
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.loop();
        }
        
    }

    // Free Play button
    if (scene === "end" && freeD < freePlayButton.width / 2) {
        lives.text = 3;
        score.text = 0;
        scene = "freePlay";

        if (level === "level1") {
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.stop();
            musicGameScene.loop();
        } else if (level === "level2") {
            musicGameScene.stop();
            musicGameSceneLevel3.stop();
            musicGameSceneLevel2.loop();
        } else if (level === "level3") {
            musicGameScene.stop();
            musicGameSceneLevel2.stop();
            musicGameSceneLevel3.loop();
        }
        
    }

    // Fire laser
    if ((scene === "game" || scene === "freePlay") && spaceShip.laser.state === "idle") {
        spaceShip.laser.state = "outbound";
        sfxFire.play();
    }
}
