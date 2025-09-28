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
            leftside: "#faf3e3ff"
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
            rightside: "#ebcbaaf2"
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

    drawCloudsCombined();
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
function drawCloudsCombined() {
  // Array of the two clouds
  const cloudsArray = [
    { data: cloud1.main, colour: cloud1.main.colourclouds.leftside },
    { data: cloud1.offset, colour: cloud1.offset.colourclouds.rightside }
  ];

  cloudsArray.forEach(cloud => {
    const c = cloud.data;
    fill(cloud.colour);
    triangle(c.ax, c.ay, c.bx, c.by, c.cx, c.cy);

    // Midpoints and angles
    let mx = (c.ax + c.bx) / 2;
    let my = (c.ay + c.by) / 2;
    let angle = atan2(c.by - c.ay, c.bx - c.ax);
    let d = dist(c.ax, c.ay, c.bx, c.by);

    let mxBC = (c.bx + c.cx) / 2;
    let myBC = (c.by + c.cy) / 2;
    let angleBC = atan2(c.cy - c.by, c.cx - c.bx);
    let dBC = dist(c.bx, c.by, c.cx, c.cy);

    // Draw all arcs
    const arcPositions = [
      { x: mx - 30, y: my + 18, a: angle, dist: d },
      { x: mx + 11, y: my, a: angle, dist: d },
      { x: mx + 40, y: my - 15, a: angle, dist: d },
      { x: mx + 70, y: my - 25, a: angleBC, dist: d },
      { x: mx + 100, y: my - 18, a: angleBC, dist: dBC },
      { x: mx + 130, y: my, a: angleBC, dist: dBC },
      { x: mx + 171, y: my + 18, a: angleBC, dist: dBC }
    ];

    arcPositions.forEach(pos => {
      push();
      translate(pos.x, pos.y);
      rotate(pos.a);
      arc(0, 0, pos.dist / 2, pos.dist / 2, PI, 0, CHORD);
      pop();
    });
  });
}





function drawMountains() {}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}