let startButtons = { x: 500, y: 350, width: 100, height: 50 };
let easyButton = { x: 200, y: 250, width: 100, height: 50 };
let loseButtons  = { x: 500, y: 350, width: 100, height: 50 };
let freePlayButton = { x: 500, y: 350, width: 100, height: 50 };

function drawStartButton() {
    push();
    rectMode(CENTER);
    fill("#4e90ff");
    rect(startButtons.x, startButtons.y, startButtons.width, startButtons.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("START", startButtons.x, startButtons.y);
    pop();
}

function draweasyButton() {
    push();
    rectMode(CENTER);
    fill("#4e90ff");
    rect(easyButton.x, easyButton.y, easyButton.width, easyButton.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Easy", easyButton.x, easyButton.y);
    pop();
}

function drawloseButton() {
    push();
    rectMode(CENTER);
    fill("#4e90ff");
    rect(loseButtons.x, loseButtons.y, loseButtons.width, loseButtons.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Try Again!", loseButtons.x, loseButtons.y);
    pop();
}

function drawFreePlayButton() {
    push();
    rectMode(CENTER);
    fill("#4e90ff");
    rect(freePlayButton.x, freePlayButton.y, freePlayButton.width, freePlayButton.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Free Play", freePlayButton.x, freePlayButton.y);
    pop();
}

function buttonHover() {
    const baseW = 100, baseH = 50;
    const d = dist(mouseX, mouseY, startButtons.x, startButtons.y);

    if (d < startButtons.width / 2) {
        startButtons.width = baseW + 10;
        startButtons.height = baseH + 10;
    } else {
        startButtons.width = baseW;
        startButtons.height = baseH;
    }
    
    
    let dEasy = dist(mouseX, mouseY, easyButton.x, easyButton.y);

    if (dEasy < easyButton.width / 2) {
        easyButton.width = baseW + 10;
        easyButton.height = baseH + 10;
    } else {
        easyButton.width = baseW;
        easyButton.height = baseH;
    }
}
