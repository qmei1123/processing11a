var canvas;
var i;
var y;
let ragged = [];

var xOne;
var xTwo;
var xThree;
var xFour;
var xFive;

var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(221,242,232);
    ragged = new Ragged();
    frameRate(.75);
}
        
class Ragged {
    constructor() {
    
    }
    show() {
        noFill();
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xOne + i, yTwo + y);
            vertex(xTwo + i, yOne + y);
            vertex(xTwo + i, yOne + y);
            vertex(xTwo + i, yThree + y);
            vertex(xThree + i, yThree + y);
            vertex(xThree + i, yFour + y);
            vertex(xThree + i, yFour + y);
            vertex(xOne + i, yFive + y);
            vertex(xOne + i, yFive + y);
            vertex(xTwo + i, yFive + y);
            vertex(xFour + i, yFour + y);
            vertex(xFour + i, yFour + y);
            vertex(xOne + i, yFour + y);
            vertex(xFive + i, yOne + y);
            vertex(xFive + i, yOne + y);
            vertex(xOne + i, yOne + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 100) {
        for (y = 0; y < height; y += 100) {
        stroke(random(30),random(40,100),random(50));
            strokeWeight(random(.2));
            xOne = random(60);
            xTwo = random(50, 110);
            xThree = random(90, 180);
            xFour = random(-60);
            xFive = random(-50, -110);
            
            yOne = random(50);
            yTwo = random(40, 100);
            yThree = random(120, 190);
            yFour = random(-40, -1);
            yFive = random(-90, -30);
            ragged.show();
        }
    }
}

