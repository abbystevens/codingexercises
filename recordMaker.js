function Record (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
}


Record.prototype.recordMaker = function () {
  
  if (this.wombat) {
    return this.name + " is " + this.age + " years old, and lives at " + this.address + "." + "  Calling " + this.name + " at " + this.phoneNumber + " about their wombat" + ".";
  } else {
    return this.name + " is " + this.age + " years old, and lives at " + this.address + ".  " + this.name + " doesn't have a wombat" + "!";
  }
}

var abby = new Record ("Abby", "123 Main St", "555-5555", 31, true);

console.log(abby.recordMaker());

