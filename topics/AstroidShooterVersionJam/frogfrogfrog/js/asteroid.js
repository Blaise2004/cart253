let asteroid = {
    x: 0,
    y: 200,
    size: 30,
    speed: 7,
    colour: "#383838ff",
};

let resetA = {
    x: -300,
    sizeMin: 40,
    sizeMax: 160,
    speedMin: 1.9,
    speedMax: 3,
    baseSpeedMin: 1.9,
    baseSpeedMax: 3
};

function moveAsteroid() {
    asteroid.x += asteroid.speed;

    if (asteroid.x > width) {
        resetAsteroid();
        lives.text--;
        sfxLoseLife.play();
    }
}

function drawAsteroid() {
    push();
    fill(asteroid.colour);
    ellipse(asteroid.x, asteroid.y, asteroid.size);
    pop();
}

function resetAsteroid() {
    asteroid.x = resetA.x;
    asteroid.y = random(0, height - height/3);
    asteroid.size = random(resetA.sizeMin, resetA.sizeMax);
    asteroid.speed = random(resetA.speedMin, resetA.speedMax);

    let grey = map(random(), 0, 1, 56, 186);
    asteroid.colour = color(grey);
}

function checkLaserAsteroidOverlap() {
    const d = dist(spaceShip.laser.x, spaceShip.laser.y, asteroid.x, asteroid.y);
    if (d < spaceShip.laser.size/2 + asteroid.size/2) {
        spaceShip.laser.hit = true;
        resetAsteroid();
        sfxHitAsteroid.play();
        spaceShip.laser.state = "inbound";
    }
}

function drawSpeedAstroid() {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Asteroid Speed: " + Math.round(asteroid.speed), 100, 30);
    pop();
}
