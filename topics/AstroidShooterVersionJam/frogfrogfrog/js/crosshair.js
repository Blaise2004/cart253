let target = { x: 500, y: 350, size: 50 };

function drawTarget() {
    noFill();
    stroke("#ff0000");
    strokeWeight(0.5);

    ellipse(target.x, target.y, target.size);
    line(target.x - target.size, target.y, target.x + target.size, target.y);
    line(target.x, target.y - target.size, target.x, target.y + target.size);
}

function moveTarget() {
    target.x = mouseX;
    target.y = mouseY;
}
