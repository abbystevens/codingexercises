function vowelsToUpper (phrase) {
  var newArray = "";

  for(var i = 0; i <= phrase.length - 1; i++) {

    if (phrase[i] === "a") {
      newArray += phrase[i].toUpperCase();
	} else if (phrase[i] === "e") {
	  newArray += phrase[i].toUpperCase();
	} else if (phrase[i] === "i") {
	  newArray += phrase[i].toUpperCase();
	} else if (phrase[i] === "o") {
	  newArray += phrase[i].toUpperCase();
	} else if (phrase[i] === "u") {
	  newArray += phrase[i].toUpperCase();	
	} else {
	  newArray += phrase[i];
	}	
  }  
return newArray;
};
console.log(vowelsToUpper("abcdefghijklmnopqrstuvwxyz"));