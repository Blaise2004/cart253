/**
 * 
 * ArtJam Assignment  
 * Blaise Treverton
 * 
 * This Project is  self portrait of sorts, it resembles my passion for the outdoors, camping and the highlands of scotland.
 * Use Mouse X to control the time of Day. 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/


const offSet = { x: 20, y: 0 };

let cloudCoordinates = {
    ax: 30,
    ay: 200,
    bx: 150,
    by: 130,
    cx: 300,
    cy: 200,
};

let cloud1 = {
    main: {
        ...cloudCoordinates,
        colourclouds: { leftside: "#faf3e3f4" }
    },
    offset: {
        ax: cloudCoordinates.ax + offSet.x,
        ay: cloudCoordinates.ay + offSet.y,
        bx: cloudCoordinates.bx + offSet.x,
        by: cloudCoordinates.by + offSet.y,
        cx: cloudCoordinates.cx + offSet.x,
        cy: cloudCoordinates.cy + offSet.y,
        colourclouds: { rightside: "#ebcbaac0" }
    }
};

let mountain = {
    top: {
        x: 200,
        y: 250
    },
    bottomLeft: {
        x: 0,
        y: 600
    },
    bottomRight: {
        x: 500,
        y: 600
    },
    translate: {
        x:300,
        y:20
    },
      translate2: {
        x:475,
        y: 50
    }
};









let moon = {
    x: 300, 
    y: 80,
    size: 100,
    colourmoon:{
    leftside: "#faf3e3",
    rightside: '#ebcaaa'
}
}


let tent = {

    inside: {
        baseColor: "#a89066ff",
        peakColor: "#c6c8a8ff"
    }
}


function setup() {
    createCanvas(1000, 800);
   
}





function draw() {
    

    
    
    noStroke();
    drawSky();
    drawMoon();
    drawCloud1();
    drawCloud2();
    drawCloud3();
    drawMountains();
    drawHills();
    drawMountains2();
    drawHills2();
    drawMountains3();
    drawHills3()

    drawFire();
    drawFirepit();
    
    drawTent();
}

function drawSky() {
    let c1 = color("#636770"); 
let c2 = color("#efe1c7");
    
     // Map mouseX (0 → width) to a value between 0 and 1
    let mouseMap = map(mouseX, 0, width, 0, 1);
    
    let backgroundColour = lerpColor(c1, c2, mouseMap);
    
    background(backgroundColour); 
 
}
function drawMoon() { // moon Function 
  
    fill(moon.colourmoon.rightside);
    ellipse(moon.x, moon.y, moon.size);
    ellipse(moon.x, moon.y, moon.size-10);

    fill(moon.colourmoon.leftside)
    arc(moon.x - 3, moon.y, moon.size - 10, moon.size, 1.7708, 5.7124, );
    
    push();
    fill(moon.colourmoon.rightside);
    ellipse(moon.x+4, moon.y+1, moon.size-14);
    pop();

    resetMatrix();

}
function drawCloud1() { //cloud Function

    angleMode(RADIANS);

    fill(cloud1.main.colourclouds.leftside);
  triangle(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  //find angle A-B
  let mx = (cloud1.main.ax + cloud1.main.bx) / 2;
  let my = (cloud1.main.ay + cloud1.main.by) / 2;

  // Angle of the slope in radians
  let angle = atan2(cloud1.main.by - cloud1.main.ay, cloud1.main.bx - cloud1.main.ax);

  // Distance between points for arc size
  let d = dist(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by);

  // Midpoint of B–C
  let mxBC = (cloud1.main.bx + cloud1.main.cx) / 2;
  let myBC = (cloud1.main.by + cloud1.main.cy) / 2;

  // Angle of the slope B→C
  let angleBC = atan2(cloud1.main.cy - cloud1.main.by, cloud1.main.cx - cloud1.main.bx);

  // Distance between B and C
  let dBC = dist(cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  push();
  translate(mx - 30, my + 18);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 11, my);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 40, my - 15);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 70, my - 25);
  rotate(angleBC);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 100, my - 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 130, my - 0);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 171, my + 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();   

  
    
    fill(cloud1.offset.colourclouds.rightside);
  triangle(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);

  //find angle A-B
  let mx2 = (cloud1.offset.ax + cloud1.offset.bx) / 2;
  let my2 = (cloud1.offset.ay + cloud1.offset.by) / 2;

  // Angle of the slope in radians
  let angle2 = atan2(cloud1.offset.by - cloud1.offset.ay, cloud1.offset.bx - cloud1.offset.ax);

  // Distance between points for arc size
  let d2 = dist(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by);

  // Midpoint of B–C
  let mxBC2 = (cloud1.offset.bx + cloud1.offset.cx) / 2;
  let myBC2 = (cloud1.offset.by + cloud1.offset.cy) / 2;

  // Angle of the slope B→C
  let angleBC2 = atan2(cloud1.offset.cy - cloud1.offset.by, cloud1.offset.cx - cloud1.offset.bx);

  // Distance between B and C
    let dBC2 = dist(cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);
    
   
    

  push();
  translate(mx2 - 30, my2 + 18);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 11, my2);
  rotate(angle);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 40, my2 - 15);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 70, my2 - 25);
  rotate(angleBC2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 100, my2 - 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 130, my2 - 0);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 171, my2 + 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
    pop();
    
    resetMatrix();
}

function drawCloud2() { //cloud Function

    translate(650, -80)
    

    fill(cloud1.main.colourclouds.leftside);
  triangle(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  //find angle A-B
  let mx = (cloud1.main.ax + cloud1.main.bx) / 2;
  let my = (cloud1.main.ay + cloud1.main.by) / 2;

  // Angle of the slope in radians
  let angle = atan2(cloud1.main.by - cloud1.main.ay, cloud1.main.bx - cloud1.main.ax);

  // Distance between points for arc size
  let d = dist(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by);

  // Midpoint of B–C
  let mxBC = (cloud1.main.bx + cloud1.main.cx) / 2;
  let myBC = (cloud1.main.by + cloud1.main.cy) / 2;

  // Angle of the slope B→C
  let angleBC = atan2(cloud1.main.cy - cloud1.main.by, cloud1.main.cx - cloud1.main.bx);

  // Distance between B and C
  let dBC = dist(cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  push();
  translate(mx - 30, my + 18);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 11, my);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 40, my - 15);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 70, my - 25);
  rotate(angleBC);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 100, my - 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 130, my - 0);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 171, my + 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();   

  
    
    fill(cloud1.offset.colourclouds.rightside);
  triangle(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);

  //find angle A-B
  let mx2 = (cloud1.offset.ax + cloud1.offset.bx) / 2;
  let my2 = (cloud1.offset.ay + cloud1.offset.by) / 2;

  // Angle of the slope in radians
  let angle2 = atan2(cloud1.offset.by - cloud1.offset.ay, cloud1.offset.bx - cloud1.offset.ax);

  // Distance between points for arc size
  let d2 = dist(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by);

  // Midpoint of B–C
  let mxBC2 = (cloud1.offset.bx + cloud1.offset.cx) / 2;
  let myBC2 = (cloud1.offset.by + cloud1.offset.cy) / 2;

  // Angle of the slope B→C
  let angleBC2 = atan2(cloud1.offset.cy - cloud1.offset.by, cloud1.offset.cx - cloud1.offset.bx);

  // Distance between B and C
    let dBC2 = dist(cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);
    
   
    

  push();
  translate(mx2 - 30, my2 + 18);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 11, my2);
  rotate(angle);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 40, my2 - 15);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 70, my2 - 25);
  rotate(angleBC2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 100, my2 - 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 130, my2 - 0);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 171, my2 + 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
    pop();
    
resetMatrix();

}

function drawCloud3() { //cloud Function

    translate(400, 50);
    
    
    fill(cloud1.main.colourclouds.leftside);
  triangle(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  //find angle A-B
  let mx = (cloud1.main.ax + cloud1.main.bx) / 2;
  let my = (cloud1.main.ay + cloud1.main.by) / 2;

  // Angle of the slope in radians
  let angle = atan2(cloud1.main.by - cloud1.main.ay, cloud1.main.bx - cloud1.main.ax);

  // Distance between points for arc size
  let d = dist(cloud1.main.ax, cloud1.main.ay, cloud1.main.bx, cloud1.main.by);

  // Midpoint of B–C
  let mxBC = (cloud1.main.bx + cloud1.main.cx) / 2;
  let myBC = (cloud1.main.by + cloud1.main.cy) / 2;

  // Angle of the slope B→C
  let angleBC = atan2(cloud1.main.cy - cloud1.main.by, cloud1.main.cx - cloud1.main.bx);

  // Distance between B and C
  let dBC = dist(cloud1.main.bx, cloud1.main.by, cloud1.main.cx, cloud1.main.cy);

  push();
  translate(mx - 30, my + 18);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 11, my);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 40, my - 15);
  rotate(angle);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 70, my - 25);
  rotate(angleBC);
  arc(0, 0, d / 2, d / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 100, my - 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 130, my - 0);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx + 171, my + 18);
  rotate(angleBC);
  arc(0, 0, dBC / 2, dBC / 2, PI, 0, CHORD);
  pop();   

  
    
    fill(cloud1.offset.colourclouds.rightside);
  triangle(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);

  //find angle A-B
  let mx2 = (cloud1.offset.ax + cloud1.offset.bx) / 2;
  let my2 = (cloud1.offset.ay + cloud1.offset.by) / 2;

  // Angle of the slope in radians
  let angle2 = atan2(cloud1.offset.by - cloud1.offset.ay, cloud1.offset.bx - cloud1.offset.ax);

  // Distance between points for arc size
  let d2 = dist(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by);

  // Midpoint of B–C
  let mxBC2 = (cloud1.offset.bx + cloud1.offset.cx) / 2;
  let myBC2 = (cloud1.offset.by + cloud1.offset.cy) / 2;

  // Angle of the slope B→C
  let angleBC2 = atan2(cloud1.offset.cy - cloud1.offset.by, cloud1.offset.cx - cloud1.offset.bx);

  // Distance between B and C
    let dBC2 = dist(cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);
    
   
    

  push();
  translate(mx2 - 30, my2 + 18);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 11, my2);
  rotate(angle);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 40, my2 - 15);
  rotate(angle2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 70, my2 - 25);
  rotate(angleBC2);
  arc(0, 0, d2 / 2, d2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 100, my2 - 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 130, my2 - 0);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
  pop();

  push();
  translate(mx2 + 171, my2 + 18);
  rotate(angleBC2);
  arc(0, 0, dBC2 / 2, dBC2 / 2, PI, 0, CHORD);
    pop();
    
resetMatrix(); // reset the translation

}


function drawMountains() {

    push();
    // Main mountain
    fill("#0d4687ff");
    triangle(
        mountain.bottomLeft.x, mountain.bottomLeft.y,
        mountain.top.x, mountain.top.y,
        mountain.bottomRight.x, mountain.bottomRight.y
    );


    // Smaller triangles / details
    fill("#93b2e3ff");
    triangle(mountain.bottomLeft.x, mountain.bottomLeft.y, mountain.top.x, mountain.top.y, 200, mountain.bottomLeft.y);
    triangle(300, 600, 200, 300, 200, 600);

    // Snow at the top
    fill("#ffffffa8");
    // Example: several small triangles to simulate jagged snow
    triangle(145, 350, mountain.top.x, mountain.top.y, 190, 320);
    triangle(190, 320, mountain.top.x, mountain.top.y, 210, 350);
    triangle(210, 350, mountain.top.x, mountain.top.y, 230, 320);
    triangle(230, 320, mountain.top.x, mountain.top.y, 250, 350);
    triangle(250, 350, mountain.top.x, mountain.top.y, 269, 330);
    pop();
}
    
function drawMountains2() {
    
    push();
    
    translate(mountain.translate.x, mountain.translate.y);

    // Main mountain
    fill("#0d4687ff");
    triangle(
        mountain.bottomLeft.x, mountain.bottomLeft.y,
        mountain.top.x, mountain.top.y,
        mountain.bottomRight.x, mountain.bottomRight.y
    );


    // Smaller triangles / details
    fill("#93b2e3ff");
    triangle(mountain.bottomLeft.x, mountain.bottomLeft.y, mountain.top.x, mountain.top.y, 200, mountain.bottomLeft.y);
    triangle(300, 600, 200, 300, 200, 600);

    // Snow at the top
    fill("#ffffffa8");
    // Example: several small triangles to simulate jagged snow
    triangle(145, 350, mountain.top.x, mountain.top.y, 190, 320);
    triangle(190, 320, mountain.top.x, mountain.top.y, 210, 350);
    triangle(210, 350, mountain.top.x, mountain.top.y, 230, 320);
    triangle(230, 320, mountain.top.x, mountain.top.y, 250, 350);
    triangle(250, 350, mountain.top.x, mountain.top.y, 269, 330);
    pop();
    
    push();
}
  

function drawMountains3() {
    translate(mountain.translate2.x, mountain.translate2.y);

    // Main mountain
    fill("#0d4687ff");
    triangle(
        mountain.bottomLeft.x, mountain.bottomLeft.y,
        mountain.top.x, mountain.top.y,
        mountain.bottomRight.x, mountain.bottomRight.y
    );


    // Smaller triangles / details
    fill("#93b2e3ff");
    triangle(mountain.bottomLeft.x, mountain.bottomLeft.y, mountain.top.x, mountain.top.y, 200, mountain.bottomLeft.y);
    triangle(300, 600, 200, 300, 200, 600);

    // Snow at the top
    fill("#ffffffa8");
    // Example: several small triangles to simulate jagged snow
    triangle(145, 350, mountain.top.x, mountain.top.y, 190, 320);
    triangle(190, 320, mountain.top.x, mountain.top.y, 210, 350);
    triangle(210, 350, mountain.top.x, mountain.top.y, 230, 320);
    triangle(230, 320, mountain.top.x, mountain.top.y, 250, 350);
    triangle(250, 350, mountain.top.x, mountain.top.y, 269, 330);
    pop();
}


function drawHills() {
    push()
    angleMode(DEGREES)
    fill("#b09831")
    arc(width / 2 - width / 4, mountain.bottomLeft.y, width / 2, 100, 180, 0);
    rect(0, mountain.bottomLeft.y, width, height-mountain.bottomLeft.y)
    pop()

}

function drawHills2() {
    push()
    translate(mountain.translate.x, mountain.translate.y)
    angleMode(DEGREES)
    fill("#b09831")
    arc(width / 2 - width / 4, mountain.bottomLeft.y, width / 2, 75, 180, 0);
    pop()

}

function drawHills3() {
    push()
    translate(mountain.translate2.x, mountain.translate2.y)
    angleMode(DEGREES)
    fill("#b09831")
    arc(width / 2 - width / 4, mountain.bottomLeft.y, width / 2, 50, 180, 0);
    pop()
}
function drawTrees() {





}
function drawFirepit() {
    angleMode(DEGREES)
    push();
     fill("#ebcaaa")
    arc(370,710,30,20,180,0)
    arc(350-3, 710, 30, 20, 180, 0)
    arc(330-3, 710, 30, 20, 180, 0)
    arc(310-3, 710, 30, 20, 180, 0)
    arc(300-3, 710, 30, 20, 180, 0)
    
    arc(350, 700, 30, 20, 180, 0)
    arc(330, 700, 30, 20, 180, 0)
    arc(310, 700, 30, 20, 180, 0)
    pop();

    push()
    fill("#816e66c0")
    arc(375,710,30,20,180,0)
    arc(365, 710, 30, 20, 180, 0)
    arc(345, 710, 30, 20, 180, 0)
    arc(315, 710, 30, 20, 180, 0)
    arc(295, 710, 30, 20, 180, 0)
    
    arc(350, 700, 30, 20, 180, 0)
    arc(330, 700, 30, 20, 180, 0)
    arc(310, 700, 30, 20, 180, 0)
    pop()
}

function drawFire() {
   
let x1 = 335 
let y1 = 680
let width1 = 40
let height1 = 48

let x2 = 335
let y2 = 680
let width2 = width1/2
let height2 = height1*0.6


  let shrinkFactor = map(mouseX, 0, width, 0, 1);

  // Lerp ellipse heights
  let minHeight1 = 0; // fully flat
  let minHeight2 = 0;

  let dynamicHeight1 = lerp(height1, minHeight1, shrinkFactor);
  let dynamicHeight2 = lerp(height2, minHeight2, shrinkFactor);

  // Outer flame
  fill("#f5a71c");
  ellipse(x1, y1, width1, dynamicHeight1);
  triangle(x1 - width2, y1, x1, y1 - dynamicHeight1, x1 + width2, y1);

  // Inner flame
  fill("#f3e1c3");
  ellipse(x1, y1, width2, dynamicHeight2);
    triangle(x1 - width2 / 2, y1, x1, y1 - dynamicHeight2, x1 + width2 / 2, y1);
    
    

    
}

function drawTent() {

let c1 = color(tent.inside.baseColor);
  let c2 = color(tent.inside.peakColor);
  let mouseMap = map(mouseX, 0, width, 0, 1);
  let blendedTentColor = lerpColor(c1, c2, mouseMap);

push();
    fill("#faf3e3")
    triangle(550, 680, 750, 500, 950, 680)
pop();
    
push();
    stroke("#faf3e3");
    strokeWeight(10);
    line(520, 710, 750, 500);
    strokeWeight(10);
    line(980, 710, 750, 500);
pop();
    
push();
    stroke("#98613e");
    strokeWeight(5);
    line(520, 710, 750, 500);
    strokeWeight(5);
    line(980, 710, 750, 500);    
pop();

push();
    fill(blendedTentColor)
    triangle(650, 680, 750, 500, 850, 680);
pop();
    
push();
    stroke("#f3e1c3");
    strokeWeight(5);
    line(750, 680, 750, 500); 
pop();
    
push();
    stroke("#d6c2ac");
    triangle(650, 680, 630, 660, 750, 500);
    triangle(850, 680, 870, 660, 750, 500);
pop();
}