function changePowerTotal (totalCurrent, genID, status, powerAmount) {
  	if (status == "on") {
    	totalCurrent += powerAmount;
    	alert("Generator #" + genID + " is now on, adding " + powerAmount + " MW, for a total of " + totalCurrent + " MW!");
  	} else if (status == "off") {
    	totalCurrent -= powerAmount;
    	alert("Generator #" + genID + " is now off, removing "+ powerAmount + " MW, for a total of " + totalCurrent + " MW!");
		}  
  return totalCurrent;
}