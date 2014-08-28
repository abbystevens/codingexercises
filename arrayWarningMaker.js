function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push([location, number]);
    var list = "";
    for(var i = 0; i<zones.length; i++){        
      list = list + "\n" + zones[i][0] + " (" + zones[i][1] + ")";  
    }
    
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are: " +
          list
         );
  };
}