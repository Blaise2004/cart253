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
let colourclouds = {
    leftside: "#faf3e3",
    rightside: '#ebcaaa'
}
let colourmoon = {
    leftside: "#faf3e3",
    rightside: '#ebcaaa'
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
function drawMoon() {
  

    fill(colourmoon.rightside);
    ellipse(200, 100, 50);

    fill(colourmoon.leftside)
   arc(196, 100, 40, 50, 1.9,11.5); // top half overlay

}
function drawClouds() {
    push();
    fill("#faf3e3")
    ellipse();
        pop();
}

function drawMountains() {}
function drawHills() {}
function drawTrees() {}
function drawFirepit() {}
function drawTent() {}