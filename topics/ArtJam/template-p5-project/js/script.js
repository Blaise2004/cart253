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
    //find angle
let mx = (clouds.ax + clouds.by) / 2;
let my = (clouds.ay + clouds.by) / 2;

    mx = mx - 0;
    my = my + 0 ;
 // Angle of the slope in radians
    let angle = atan2(clouds.by - clouds.ay, clouds.bx - clouds.ax);
    
     // Distance between points for arc size
  let d = dist(clouds.ax, clouds.ay, clouds.bx, clouds.by);

mx = mx - 0;
    my = my + 0 ;

   
   push();
    translate(mx-20, my+18);
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
    rotate(angle+1);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

     push();
    translate(mx+100, my-18);
    rotate(angle*-1);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

    push();
    translate(mx+130, my-0);
    rotate(angle*-1);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

    push();
    translate(mx+178, my+18);
    rotate(angle*-1);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();

    push();
    translate(mx+188, my+18);
    rotate(angle*-1);
    arc(0, 0, d/2, d/2, PI, 0, CHORD); // bottom-facing semi-circle
    pop();
    
}

function drawMountains() {}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}