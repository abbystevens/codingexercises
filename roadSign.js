/*## Basic assignment 1

Use the class creation pattern to implement a RoadSign class. It should have text, color and shape properties. 
Use the constructor to create a Yield Sign, a Stop Sign and a Speed Limit Sign.

upload your work as roadsign.js
*/

function RoadSign (text, color, shape) {
	this.text = text;
	this.color = color;
	this.shape = shape;
}

RoadSign.prototype.whatsYourSign = function () {
	return "I am a " + this.text + " sign.  I am " + this.color + " and I am a shapely " + this.shape + ".";
}

var yield = new RoadSign ("Yield", "red and white", "triangle");
var stop = new RoadSign ("Stop", "red and white", "octogon");
var speed = new RoadSign ("Speed Limit", "black and white", "square");

console.log(yield.whatsYourSign());
console.log(stop.whatsYourSign());
console.log(speed.whatsYourSign());