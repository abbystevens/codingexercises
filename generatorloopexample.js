/* The guys at the Hoover Dam have called you back, and would like a file that shows what happens when just 
the even numbered turbines are turned on. Furthermore, they want it all in just one for-loop. 
(They tend to micromanage.)

With a set of complex conditional statements, construct a way inside the loop to only turn on even numbered 
turbines today. Remember our power output situation, too: generators 1-4 produce 62 MW and generators 
5-19 produce 124 MW. The output format should be as follows:

Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!

We’ve given you some starting variables to use in your build. Within your loop, consider the 3 possible 
scenarios when building your conditions:

The Generator is off
The Generator provides 62 MW of power
The Generator provides 124 MW of power */

var totalGen = 19;
var totalMW = 0;

for (var gen = 1; gen <= totalGen; gen++ ) {
	
	if (gen % 2 == 0) {

		if (gen <= 4) {
			totalMW += 62;
			console.log("Generator #" + gen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");

		} else if (gen > 4) {
			totalMW += 124;
			console.log("Generator #" + gen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
		}

	} else {
		console.log("Generator #" + gen + " is off.");
	}
}