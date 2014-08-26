/* Back at the Hoover Dam, the technicians are fed up with the all-or-nothing generator switch technique (ANGST). 
They have decided they want significantly more control of which generators are on and off. 
So, they’ve asked you to develop a way to adjust the total generated Megawatts upon the switch-on or switch-off 
of a single, chosen generator.

Build a function declaration named changePowerTotal that takes in:

The total current power generated (a number)
A generator ID (a number)
The new status of a generator (a string that says “on” or “off”)
And the amount of power produced by that generator (a number)
Your function should:

return the new total of generated power
alert the technician in the following formats
For switching on:

Generator #2 is now on, adding 62 MW, for a total of 62 MW!
Or for switching off:

Generator #2 is now off, removing 62 MW, for a total of 0 MW!
*/

function changePowerTotal (totalCurrentPower, genID, genStatus, genPower) {

	if (genStatus == "on") {
		totalCurrentPower += genPower;
		alert("Generator #" + genID + " is now on, adding " + genPower + " MW, for a total of " + totalCurrentPower + "MW!");
	//or should return be alert?
	} else if (genStatus = "off") {
		totalCurrentPower -= genPower;
		alert("Generator #" + genID + " is now off, removing " + genPower + "MW, for a total of " + totalCurrentPower + "MW!");
	}
	return totalCurrentPower;
}

console.log(changePowerTotal(0, 2, "on", 62));
console.log(changePowerTotal(62, 2, "off", 62));