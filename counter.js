function countE () {
	var phrase = prompt("Which phrase would you like to examine?");
	
	if (typeof(phrase) != "string") {
		alert("That's not a valid entry!");
		return false;
	
	} else {	
	var counter = 0;
	for (var i = 0; i < phrase.length; i++) {
		if (phrase.charAt(i) == 'e' || phrase.charAt(i) == "E") {
				counter++;
		}
	}

	alert("There are " + counter + "E's in \"" + phrase + "\".");
	return true;

}