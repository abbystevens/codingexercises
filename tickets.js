var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55]];
var fastPassQueue = ["Pines Plunge", "Birch Bumpers"];

var wantsRide = "Birch Bumpers";

/*var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket(); 
this is the long way to call the function.  don't need to store it in a variable, instead, immediately invoke function using the following Line 10.*/

buildTicket(parkRides, fastPassQueue, wantsRide)();

function buildTicket (allRides, passRides, pick) {
	if(passRides[0] == pick) {
		var pass = parkRides.shift();
		return function () {alert("You've got a Fast Pass to " + pass + "!");};
	
	} else {
		for (var i = 0; i< allRides.length; i++) {
			if(allRides[i][0] == pick) {
				return function () {alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes.");
				};
			}
		}
	}
}

