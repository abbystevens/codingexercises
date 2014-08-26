function addPassenger (name, list) {
	if (list.length == 0) {
		list.push(name);
	} else {
		for (var i = 0; i < list.length; i++) {
			if (list[i] == undefined) {
				list[i] = name;
				return list;
			} else if (i == list.length - 1) {
				list.push(name);
				return list;
			}
		}
	}
}

var passengerList = [];

passengerList = addPassenger("Abby", passengerList);
passengerList = addPassenger("Lori", passengerList);

function deletePassenger (name, list) {
	if (list.length == 0) {
		console.log("No names in list!");
	} else {
		for (var i = 0; i < list.length; i++) {
			if (list[i] == name) {
				list[i] = undefined;
				return list;
			} else if (i == list.length - 1) {
				console.log("Passenger not found!");
			}
		}
	}
	return list;


passengerList = deletePassenger("Abby", passengerList);
passengerList = addPassenger("Trevor", passengerList);
