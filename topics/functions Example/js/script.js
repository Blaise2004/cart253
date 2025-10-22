/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let rectX = 20;
let rectY = 40
let rectSize = 50 

let rectTeoX= 100
let rectTwoY = 200
let rectTwoSize= 25


let sun = {
    x: 400,
    y: 50,
    size: 100,
    colour: "#dbba25ff"

}
let sun2 = {
    x: 20,
    y: 50,
    size: 100,
    colour: "#db5925ff"

}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)
    
}

function moveRect(temp_x) {
    temp_x += 1
    return temp_x;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("pink")
   rectX = moveRect(rectX);
    fancyRect_Rev(rectX, rectY, rectSize);
    fancyRect_Rev(100, 150, 25);
    displaySun(sun.x,sun.y,sun.size,sun.colour);
}


function displaySun(temp_x,temp_y,temp_size,temp_colour) {
    push();
    fill(temp_colour)
    ellipse(temp_x,temp_y,temp_size,temp_size)
    pop();

}


function displaySunObj(temp_Obj) {
        push();
    fill()
    ellipse(temp_x,temp_y,temp_size,temp_size)
    pop();



}
function fancyRect_Rev(temp_x, temp_y, temp_size){
 push();
    fill("#ce87eb");
    rect(temp_x, temp_y, temp_size, temp_size);
    pop();


}


function fancyRect(){ 

    push();
    fill("#ce87eb");
    rect(rectX, rectY, rectSize, rectSize);
    pop();

}