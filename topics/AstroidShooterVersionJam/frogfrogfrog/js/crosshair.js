let target = { x: 500, y: 350, size: 50, };
let crossHairAngle = 0;


function drawTarget() {
    push();  
    translate(target.x, target.y);
    rotate(crossHairAngle);

    noFill();
    stroke("#ff0000");
    strokeWeight(0.5);

    ellipse(0, 0, target.size);
    line(-target.size, 0, target.size, 0);
    line(0, -target.size, 0, target.size);

    pop(); 
}


function moveTarget() {
    target.x = mouseX;
    target.y = mouseY;
}

function crossHairAnimation() {
    if ((scene === "game" || scene === "freePlay") && spaceShip.laser.state === "inbound") {
        crossHairAngle += TWO_PI * (3/ 60); 
    }
}
