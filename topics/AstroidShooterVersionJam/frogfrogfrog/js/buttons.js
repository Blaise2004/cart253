let startButtons = { x: 500, y: 250, width: 100, height: 50 };
let easyButton = { x: 500, y: 350, width: 0, height: 50 };
let hardButton = { x: 500, y: 450, width: 0, height: 50 };
let impossibleButton = { x: 500, y: 550, width: 0, height: 50 };
let loseButtons  = { x: 500, y: 250, width: 100, height: 50 };
let freePlayButton = { x: 500, y: 350, width: 100, height: 50 };
let easyText = "Level 1"
let hardText = "Level 2"
let impossibleText = "Level 3"

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
    fill("#77ff4eff");
    rect(easyButton.x, easyButton.y, easyButton.width, easyButton.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(easyText, easyButton.x, easyButton.y);
    pop();
}

function drawhardButton() {
    push();
    rectMode(CENTER);
    fill("#ff4e4e");   
    rect(hardButton.x, hardButton.y, hardButton.width, hardButton.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(hardText, hardButton.x, hardButton.y);
    pop();
}

function drawImpossibleButton() {
    push();
    rectMode(CENTER);
    fill("#8a00ff"); 
    rect(impossibleButton.x, impossibleButton.y, impossibleButton.width, impossibleButton.height);
    pop();

    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(impossibleText, impossibleButton.x, impossibleButton.y);
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
    
    const easyBaseW = 70, easyBaseH = 50;
    let dEasy = dist(mouseX, mouseY, easyButton.x, easyButton.y);

    if (dEasy < easyButton.width / 2) {
        easyButton.width = easyBaseW + 10;
        easyButton.height = easyBaseH + 10;
        easyText = "$" + levelCost.x;
    } else {
        easyButton.width = easyBaseW;
        easyButton.height = easyBaseH;
        easyText = "Level 1"
    }

    const hardBaseW = 70, hardBaseH = 50;
let dHard = dist(mouseX, mouseY, hardButton.x, hardButton.y);

if (dHard < hardButton.width / 2) {
    hardButton.width = hardBaseW + 10;
    hardButton.height = hardBaseH + 10;
         hardText = "$"+ levelCost.y;
} else {
    hardButton.width = hardBaseW;
    hardButton.height = hardBaseH;
        hardText = "Level 2"
}

const impossibleBaseW = 70, impossibleBaseH = 50;
let dImpossible = dist(mouseX, mouseY, impossibleButton.x, impossibleButton.y);

if (dImpossible < impossibleButton.width / 2) {
    impossibleButton.width = impossibleBaseW + 10;
    impossibleButton.height = impossibleBaseH + 10;
    impossibleText = "$" + levelCost.z;
} else {
    impossibleButton.width = impossibleBaseW;
    impossibleButton.height = impossibleBaseH;
    impossibleText = "Level 3"
}

    
}
