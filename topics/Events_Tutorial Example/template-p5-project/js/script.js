/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let face = {
    x: 0,
        y:0,
    size: 20,
    Colour: "#00ff11ff",
    isGreen:true
}

let face2 = {
    x: 100,
        y:100,
    size: 50,
    Colour: "#805cceff",
    isGreen:true
}

let face3 = {
    x: 100,
    y: 100,
    size: 50,
    Colour: "#805cceff",
    isGreen: true,
    rectBoolean: false
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  
    

    createCanvas(500, 500);
    face.x = width / 2
    face.y = height /2
    console.log(face.x)


    setTimeout(timeEvent, 1000);
    
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
   background("#eaff00ff");
    push();
    fill(face.Colour);
    noStroke();
    ellipse(face.x, face.y, face.size, face.size);
    pop();

    push();
    fill(face2.Colour);
    noStroke();
    ellipse(face2.x, face2.y, face2.size, face2.size);
  
    pop();
      
    if (rectBoolean === true) {
        push();
        fill(face3.Colour);
        noStroke();
        rect(face3.x, face3.y, face3.size, face3.size);
        pop();
    }


}

function timeEvent() { 

    console.log("timer was triggered")
    face3.rectBoolean = true;


}

function mousePressed() {
    //face.x = mouseX
    //face.y = mouseY
    let distance = dis(face.x, face.y, mouseX, mouseY);
    if (distance < face.size / 2) {

        if (face.isGreen === true) {

            face.Colour = "#ff0bceff";
           face.isGreen = false;
        }
       else{
            face.Colour = "#00ff11ff";
            face.isGreen = true;
        }

       // face.isGreen = !face.isGreen;


    }
}
    
function keyPressed(event) {

    event.log(event)
    event.log(event.key)
    if (event.key === "q") {
        face2.x += 2 // +=means plus to to the start value
    }
    else if (event.key === "f") {
        face2.x += 2 // +=means plus to to the start value
    }
    


 }

