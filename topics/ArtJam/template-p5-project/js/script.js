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
let clouds = {
   
ax : 30,
ay : 200,
bx : 150,
    by: 130,
    cx: 300,
    cy: 200,


    colourclouds: {
        leftside: "#faf3e3",
        rightside: '#b5a08f'
    }
}
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
  fill(clouds.colourclouds.leftside);
    triangle(clouds.ax, clouds.ay, clouds.bx, clouds.by, clouds.cx, clouds.cy);
    
    
    //find angle A-B
let mx = (clouds.ax + clouds.bx) / 2;
let my = (clouds.ay + clouds.by) / 2;


 // Angle of the slope in radians
    let angle = atan2(clouds.by - clouds.ay, clouds.bx - clouds.ax);
    
     // Distance between points for arc size
    let d = dist(clouds.ax, clouds.ay, clouds.bx, clouds.by);
    
    // Midpoint of B–C
let mxBC = (clouds.bx + clouds.cx) / 2;
let myBC = (clouds.by + clouds.cy) / 2;

// Angle of the slope B→C
let angleBC = atan2(clouds.cy - clouds.by, clouds.cx - clouds.bx);

// Distance between B and C
let dBC = dist(clouds.bx, clouds.by, clouds.cx, clouds.cy);


   push();
    translate(mx-30, my+18);
    rotate(angle);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();
   
    push();
    translate(mx+11, my);
    rotate(angle);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();


    
    push();
    translate(mx+40, my-15);
    rotate(angle);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();
    
    push();
    translate(mx+70, my-25);
    rotate(angleBC);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

     push();
    translate(mx+100, my-18);
    rotate(angleBC);
    arc(0, 0, dBC/2, dBC/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

    push();
    translate(mx+130, my-0);
    rotate(angleBC);
    arc(0, 0, dBC/2, dBC/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

    push();
    translate(mx+171, my+18);
    rotate(angleBC);
    arc(0, 0, dBC/2, dBC/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

 
    
}

function drawMountains() {}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}