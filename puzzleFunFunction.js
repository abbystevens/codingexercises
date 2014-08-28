/*Immediately-Invoked Puzzler

Alert the answer to the following question.

“What is obtained when the result of passing 9 into function 4 is then passed into the function whose array index matches the result of passing 3 into function 2?”

var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
To really impress the puzzle builders, the expression used in your alert should:

Involve no manual calculation or hard-coded math on your part.
Use indices of arrays to access functions.
Use parentheses to pass in parameters to immediately-invoking functions.
Use just one line of code.

------------------------------------------------------------------------------------------------ */

var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

alert(function () { return puzzlers[puzzlers[1](3)](puzzlers[3](9));});