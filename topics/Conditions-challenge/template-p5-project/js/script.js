/**
 * Circle Master
 * Blaise Treverton
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */
const target = {

    x: 350,
    y: 200,
    size: 50,
    fill: "#005effff",
    fill2: "#00ff08ff"


}
const puck = {
  x: 200,
  y: 200,
  size: 100,
    fill: "#ff0000",
  speed: 1
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the 
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
   
    
    
    checkTarget();
  // Move user circle
  moveUser();
    
   
    movePuck();
  // Draw the user and puck
    drawUser();
    
    drawPuck();
      drawTarget();
}










    



/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
 
 

    push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

function movePuck() {
  
//we are using 3 different players here
    // mouse
    // user
    //puck
    const distance = dist(user.x, user.y, puck.x, puck.y);
    console.log(distance);

    const mouseIsOverlapping = (distance < puck.size/2 +user.size/2 );
    //X
    if (mouseIsOverlapping) {
        if (mouseX < puck.x) {
            puck.x = puck.x + puck.speed;
        }
        else {
            puck.x = puck.x - puck.speed;
            }
         
       //Y
        if (mouseY < puck.y) {
            puck.y = puck.y + puck.speed;
        }
        else {
            puck.y = puck.y - puck.speed;
            }
        
    }
}
/**
 * Displays the puck circle
 */
function drawPuck() {
  
    puck.x = constrain(puck.x, 0+puck.size/2,width-puck.size/2)
   puck.y = constrain(puck.y, 0+puck.size/2,height-puck.size/2)
    push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  
    
    
    pop();
}

function checkTarget() {
    
    const distance = dist(puck.x, puck.y, target.x , target.y);
    
    const mouseIsOverlapping = (distance < target.size);
    
    if (mouseIsOverlapping) {
        target.fill = target.fill2;
    }

}

function drawTarget() {
    
     push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();


}