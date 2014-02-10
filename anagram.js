

function anagram (string, string2) {
	
//first take both words and see if they are the same length. 
//If yes, turn each string to lower case, then split each into an array.
	if (string.length === string2.length) {
		var stringArr = string.toLowerCase().split('');
		var string2Arr = string2.toLowerCase().split('');
		alpha(stringArr, string2Arr);
	
//Call the function where we will alphabetize the array
	} else {
		throw new Error (string + " is not the same length of " + string2 + " and therefore is not an anagram of it.");
	};

	function alpha (stringArr, string2Arr) {
	//Alphabetize each array.
		stringArr = stringArr.sort();
		string2Arr = string2Arr.sort();
	};

	combine(stringArr, string2Arr);

	function combine (stringArr, string2Arr) {
		var string1 = stringArr.join();
		var string2Again = string2Arr.join();
		identical(string1, string2Again);
	};

	function identical (string1, string2Again) {
		if (string1 == string2Again) {
			console.log(string + " is an anagram of " + string2 + ".");
		} else {
			console.log("GAME OVER!  " + string + " is NOT an anagram of " + string2 + ".");
		}
	}
		
};

anagram("cat", "act");
anagram("quest", "micro");
anagram("parent", "child");
