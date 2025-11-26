const spaceShip = {
    body: { x: 500, y: 650, size: 45 },
    laser: {
        x: undefined,
        y: 650,
        size: 10,
        speed: 70,
        state: "idle",
        hit: false
    }
};

const startShip = {
    body: { x: 500, y: 350, size: 300 }
};

function moveSpaceShip() {
    spaceShip.body.x = mouseX;
}

function moveLaser() {
    spaceShip.laser.x = spaceShip.body.x;

    if (spaceShip.laser.state === "idle") return;

    if (spaceShip.laser.state === "outbound") {
        spaceShip.laser.y -= spaceShip.laser.speed;
        if (spaceShip.laser.y <= 0) spaceShip.laser.state = "inbound";
    }

    else if (spaceShip.laser.state === "inbound") {
        spaceShip.laser.y += spaceShip.laser.speed;
        if (spaceShip.laser.y >= spaceShip.body.y - spaceShip.body.size/2)
            spaceShip.laser.state = "idle";
    }
}

function drawSpaceShip() {

   
    // Draw the laser tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(spaceShip.laser.x, spaceShip.body.y, spaceShip.laser.size);
    pop();

    // Laser line
    push();
    stroke("#4e0606ff");
    strokeWeight(spaceShip.laser.size);
    line(spaceShip.laser.x, spaceShip.laser.y, spaceShip.body.x, spaceShip.body.y);
    pop();


    push()
    if (level === "level3") {
        // shrink ship to 50%
        translate(spaceShip.body.x, spaceShip.body.y);
        scale(0.5);
        translate(-spaceShip.body.x, -spaceShip.body.y);
    }
    // Draw the spaceShip's body + wings
    fill("#2f556eff");
    noStroke();
    ellipse(spaceShip.body.x, spaceShip.body.y, spaceShip.body.size);

    // left front fin
    triangle(
        spaceShip.body.x - spaceShip.body.size/2, spaceShip.body.y,
        spaceShip.body.x - spaceShip.body.size/4, spaceShip.body.y,
        spaceShip.body.x - spaceShip.body.size/2.5, spaceShip.body.y - spaceShip.body.size
    );

    // left wing
    triangle(
        spaceShip.body.x, spaceShip.body.y + spaceShip.body.size/2,
        spaceShip.body.x, spaceShip.body.y,
        spaceShip.body.x - spaceShip.body.size * 1.2, spaceShip.body.y
    );

    // right front fin
    triangle(
        spaceShip.body.x + spaceShip.body.size/2, spaceShip.body.y,
        spaceShip.body.x + spaceShip.body.size/4, spaceShip.body.y,
        spaceShip.body.x + spaceShip.body.size/2.5, spaceShip.body.y - spaceShip.body.size
    );

    // right wing
    triangle(
        spaceShip.body.x, spaceShip.body.y + spaceShip.body.size/2,
        spaceShip.body.x, spaceShip.body.y,
        spaceShip.body.x + spaceShip.body.size * 1.2, spaceShip.body.y
    );

    // back fin
    triangle(
        spaceShip.body.x - spaceShip.body.size/1.5, spaceShip.body.y,
        spaceShip.body.x + spaceShip.body.size/1.5, spaceShip.body.y,
        spaceShip.body.x, spaceShip.body.y + spaceShip.body.size
    );
    pop();

    pop();  
}


function drawStartShip() {
    // identical to your original, safely moved here
    push();
    fill("#2f556eff");
    noStroke();

    ellipse(startShip.body.x, startShip.body.y, startShip.body.size);

    triangle(
        startShip.body.x - startShip.body.size/2, startShip.body.y,
        startShip.body.x - startShip.body.size/4, startShip.body.y,
        startShip.body.x - startShip.body.size/2.5, startShip.body.y - startShip.body.size
    );

    triangle(
        startShip.body.x, startShip.body.y + startShip.body.size/2,
        startShip.body.x, startShip.body.y,
        startShip.body.x - startShip.body.size * 1.2, startShip.body.y
    );

    triangle(
        startShip.body.x + startShip.body.size/2, startShip.body.y,
        startShip.body.x + startShip.body.size/4, startShip.body.y,
        startShip.body.x + startShip.body.size/2.5, startShip.body.y - startShip.body.size
    );

    triangle(
        startShip.body.x, startShip.body.y + startShip.body.size/2,
        startShip.body.x, startShip.body.y,
        startShip.body.x + startShip.body.size * 1.2, startShip.body.y
    );

    triangle(
        startShip.body.x - startShip.body.size/1.5, startShip.body.y,
        startShip.body.x + startShip.body.size/1.5, startShip.body.y,
        startShip.body.x, startShip.body.y + startShip.body.size
    );
    pop();





}
