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

let cloud1 = {
    main: {
        ax: 30,
        ay: 200,
        bx: 150,
        by: 130,
        cx: 300,
        cy: 200,
        colourclouds: {
            leftside: "#faf3e3"
        }
    },
    offset: {
        ax: 30 + offSet.x,
        ay: 200 + offSet.y,
        bx: 150 + offSet.x,
        by: 130 + offSet.y,
        cx: 300 + offSet.x,
        cy: 200 + offSet.y,
        colourclouds: {
            rightside: "#ebcaaa"
        }
    }
};



let moon = {
    x: 200, 
    y: 80,
    size: 50,
    colourmoon:{
    leftside: "#faf3e3",
    rightside: '#ebcaaa'
}
}





function setup() {
    createCanvas(800, 600,);
    background(220); 
}





function draw() {
    noStroke();
drawSky();
drawMoon();

    drawClouds();
  drawClouds2();
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

}
function drawClouds() { //cloud Function
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
}



function drawClouds2() { //cloud Function
  fill(cloud1.offset.colourclouds.rightside);
  triangle(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);

  //find angle A-B
  let mx = (cloud1.offset.ax + cloud1.offset.bx) / 2;
  let my = (cloud1.offset.ay + cloud1.offset.by) / 2;

  // Angle of the slope in radians
  let angle = atan2(cloud1.offset.by - cloud1.offset.ay, cloud1.offset.bx - cloud1.offset.ax);

  // Distance between points for arc size
  let d = dist(cloud1.offset.ax, cloud1.offset.ay, cloud1.offset.bx, cloud1.offset.by);

  // Midpoint of B–C
  let mxBC = (cloud1.offset.bx + cloud1.offset.cx) / 2;
  let myBC = (cloud1.offset.by + cloud1.offset.cy) / 2;

  // Angle of the slope B→C
  let angleBC = atan2(cloud1.offset.cy - cloud1.offset.by, cloud1.offset.cx - cloud1.offset.bx);

  // Distance between B and C
  let dBC = dist(cloud1.offset.bx, cloud1.offset.by, cloud1.offset.cx, cloud1.offset.cy);

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
}




function drawMountains() {}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}