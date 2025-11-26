"use strict";

//(Controls scenes, setup, draw, mouse input)

let scene = "start";
let level = "level1";

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
        drawGoal();
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
        drawSpeedAstroid();
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

function drawGoal() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("AIM: DESTROY " + goal + " ASTEROIDS", startButtons.x, startButtons.y + 50);
}

function mousePressed() {
    const startD = dist(mouseX, mouseY, startButtons.x, startButtons.y);
    const loseD  = dist(mouseX, mouseY, loseButtons.x, loseButtons.y);
    const freeD  = dist(mouseX, mouseY, freePlayButton.x, freePlayButton.y);

    if (scene === "start" && startD < startButtons.width / 2) {
        scene = "game";
        musicGameScene.loop();


        if (level === "level1") {
    musicGameSceneLevel2.stop();
    musicGameScene.loop();
} else if (level === "level2") {
    musicGameScene.stop();
    musicGameSceneLevel2.loop();
}
    }

    if (scene === "lose" && loseD < loseButtons.width / 2) {
        lives.text = 3;
        score.text = 0;
        resetAsteroid();
        spaceShip.laser.state = "idle";
        scene = "game";

             if (level === "level1") {
    musicGameSceneLevel2.stop();
    musicGameScene.loop();
} else if (level === "level2") {
    musicGameScene.stop();
    musicGameSceneLevel2.loop();
}
        

}

    if (scene === "end" && freeD < freePlayButton.width / 2) {
        lives.text = 3;
        score.text = 0;
        scene = "freePlay";
            
        if (level === "level1") {
    musicGameSceneLevel2.stop();
    musicGameScene.loop();
} else if (level === "level2") {
    musicGameScene.stop();
    musicGameSceneLevel2.loop();
}
    }

    if ((scene === "game" || scene === "freePlay") &&
        spaceShip.laser.state === "idle") {
        spaceShip.laser.state = "outbound";
        sfxFire.play();
    }
}
