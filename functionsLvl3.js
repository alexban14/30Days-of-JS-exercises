// array as a parameter and it returns a shuffled array
let arr = ['a','b','c','1','2','3'];
function shuffleArray(arr) {
	// let arr = [args]
	let newArr = [];
	for(let i = 0; newArr.length !== arr.length; i++) {
		let randNum = Math.floor(Math.random() * arr.length);
		if (!newArr.includes(arr[randNum])) {
			newArr.push(arr[randNum]);
		}
	}
	return newArr;
}

let array = ['a','b','c','@','%','*', 1, 2, 3];
function arrayShuffle(array) {
	let newArr = [];
	while (newArr.length !== array.length) {
		let randNum = Math.floor(Math.random() * array.length);
		if (!newArr.includes(array[randNum])) {
			newArr.push(array[randNum]);
		}
	}
	return newArr;
}

// function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
	let factorial = 1;
	for(let i = 1; i <= number; i++) {
		factorial *= i;
	}
	return factorial
}


// function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
	let sum = 0;
	for(let i = 0; i < args.length ; i++) {
		sum = sum + args[i];
	}
	return sum;
}

// sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
const arrayItems = ['a', 'b', 'c', '@', '%', '*', 1, 2, 3];
function sumOfArrayItems(arrayItems) {
	let sum = 0;
	for(let i = 0; i < arrayItems.length; i++) {
		let valueToCheck = arrayItems[i];
		// if (!isNaN(valueToCheck))
		if (typeof valueToCheck === 'number') {
			sum += valueToCheck;
		}
	}
	return sum;
}

// average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const numArr = [134,2545,3647,4756,5677,6756,7575];
function average(numArr) {
	if (numArr.some(isNaN)) {
		return 'You need to pass an array of numbers!'
	} else {
		let sum = 0;
		for(let i = 0; i < numArr.length; i++) {
			sum += numArr[i];
		}
		let average = sum / numArr.length;
		return average;
	}
}

// modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const arrToMod = ['Avocado', 'Tomato', 'Potato','Mango','Mango', 'Lemon','Carrot'];
function modifyArray(arrToMod) {
	if(arrToMod.length < 5) {
		return 'Item not found';
	} else {
		// let iF = arrToMod.splice(5,1, arrToMod[5].toUpperCase());
		let indexFive = arrToMod[5].toUpperCase();
		arrToMod.splice(5, 1, indexFive);
	}
	return arrToMod;
}

//  isPrime, which checks if a number is prime number.
function isPrime(num) {
	let isPrime = true;
	if (num === 1) {
		return '1 is neither prime or composite number';
	} else if (num > 1) {
		for(let i = 2; i < num; i++) {
			if (num % i == 0) {
				isPrime = false;
			}
		}
		if (isPrime) {
			return `${num} is a prime number`;
		} else {
			return `${num} is not a prime number`;
		}
	}
}

// returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandom() {
	let randNums = [];
	while(randNums.length !== 7) {
		let randNum = Math.floor(Math.random() * 10);
		if(!randNums.includes(randNum)) {
			randNums.push(randNum);
		}
	}
	return randNums;
}

// reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
let countries = ['Romania', 'Germany', 'Islanda', 'Spain', 'Norway'];
function reverseCountries(countries) {
	let revCountries = [];
	for(let i = 0; i < 5; i++) {
		let country = countries.pop();
		revCountries.push(country);
	}
	return revCountries;
}
