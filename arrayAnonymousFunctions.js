var puzzlers = [one, two, three, four];

var one = function (input) {
  return input * 3 - 8;
};

var two = function (input) {
  var sum = input + 2;
  return sum * sum * sum;
};

var three = function (input) {
  return input * input - 9;
};

var four = function (input) {
  return input % 4;
};
