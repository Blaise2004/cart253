/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "en";

// Starts with the instruction
let carName = "Click to generate a car name.";
let dinoName = "a dinosaur"

/**
 * Load the car and dinosaur data
 */
function preload() {
    carData = loadJSON("assets/Data/cars.json");
    dinosaurData = loadJSON("assets/Data/dinosaurs.json");
    langData = loadJSON("assets/Data/lang.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
   
if (lang === "fr") {
    carName = langData.instructions.fr;
}
else if (lang === "en") {
    carName = langData.instructions.en;
}
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(20);
    text(carName + " " + "and" + " " + dinoName, width / 2, height / 2);
    pop();
    
}

/**
 * Generate a new car name
 */
function mousePressed() {
    carName = carData.cars[Math.floor(random(0, carData.cars.length - 1))]
   dinoName = dinosaurData.dinosaurs[Math.floor(random(0, carData.cars.length - 1))]
    console.log(carName);
}