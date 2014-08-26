//builds a new array

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map( function (arrayCell) {
			return arrayCell[0] + " " + arrayCell[1];
});

var modifiedNames = [ "Thomas Meeks", 
                      "Gregg Pollack", 
                      "Christine Wong", 
                      "Dan McGaw" ];

modifiedNames.map(function (arrayCell) { alert("Yo, " + arrayCell); });