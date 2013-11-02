/*
Adapt the code from the previous assignment so that the loop runs a certain number of times. 
As the loop runs, push the results from each iteration into an array that's visible at top 
level scope. 
When the set number of iterations are complete console.log() out the contents 
of the array.
*/

var read = require('read');
var names = [];

intro();

  function intro() {
    console.log("What's your name?");
    read({prompt: '>'}, getName);
    return;
  }

  function getName(err, result, isDefault) {
    names.push(result);
    
    if (result === "exit") {
      console.log("Bye bye!");
      process.exit();
    }

    if (names.length === 4) {
      console.log(names);
      process.exit();
    }

    intro();
    return names;
  }

