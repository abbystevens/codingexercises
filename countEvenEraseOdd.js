var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenCount = 0;

for (var i = 0; i < numberList.length; i++) {
	if (numberList[i] % 2 == 0) {
		evenCount++;
	} else {
		numberList[i] = undefined;
	}
}

console.log(evenCount);
console.log(numberList);
console.log(numberList.length);