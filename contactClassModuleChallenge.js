var read = require('read');

var name = "";
var address = "";
var phone = "";

function Information (name, address, phone){
		this.name = name,
		this.address = address,
		this.phone = phone	
}

Information.prototype.toString = function () {
	return "Thanks for your personal information, " + this.name + 
	"!  We will send the feds to " + this.address + ".  If we miss you we'll call " + 
	this.phone + " every 5 minutes for eternity."
}

console.log("What is your name?");
read({prompt: '> '}, getName);

function getName (err, result, isDefault) {
  name = result;
  console.log("What is your Address?");
  read({prompt: '> '}, getAddress);
  return name;
}

function getAddress (err, result, isDefault) {
	address = result;
	console.log("What is your phone number?");
	read({prompt: '> '}, getPhone);
	return address;
}

function getPhone (err, result, isDefault) {
	phone = result;
	var user = new Information(name, address, phone);

   console.log(user.toString());
}


