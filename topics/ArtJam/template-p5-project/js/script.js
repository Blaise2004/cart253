/**
 * ArtJam Assignment 
 * Blaise Treverton
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
        colourclouds: { leftside: "#faf3e3ff" }
    },
    offset: {
        ax: cloudCoordinates.ax + offSet.x,
        ay: cloudCoordinates.ay + offSet.y,
        bx: cloudCoordinates.bx + offSet.x,
        by: cloudCoordinates.by + offSet.y,
        cx: cloudCoordinates.cx + offSet.x,
        cy: cloudCoordinates.cy + offSet.y,
        colourclouds: { rightside: "#ebcbaaf2" }
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





function setup() {
    createCanvas(1000, 800,);
    background(220); 
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
drawTrees();
drawFirepit();
    drawTent();
}

function drawSky() {
    let skycolour1 = '#65687bff';
    background (skycolour1)
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

    translate(450, -80)
    

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
fill("#0d4687ff");
triangle(0, 600, 200, 250, 500, 600);
pop();

push();
fill("#93b2e3ff");
triangle(0, 600, 200, 250, 200, 600);
pop();

push();
fill("#93b2e3ff");
triangle(300, 600, 200, 300, 200, 600);
    pop();
    
    translate(200, 0)
    
      push();
fill("#0d4687ff");
triangle(0, 600, 200, 250, 500, 600);
pop();

push();
fill("#93b2e3ff");
triangle(0, 600, 200, 250, 200, 600);
pop();

push();
fill("#93b2e3ff");
triangle(300, 600, 200, 300, 200, 600);
    pop();
    
    
}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}