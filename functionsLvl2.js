// a function which takes any number of arguments and return the sum
function addNumbers() {
	console.log (arguments);
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;
}

// function that counts number of evens and odds in the number declared in the argument
function evensAndOdds(number) {
	let evenSum = 0;
	let oddSum = 0;
	for (let i = 0; i <= number; i++) {
		if (i % 2 === 0) {
			evenSum++;
		} else if (i % 2 !== 0) {
			oddSum++;
		}
	}
	console.log('The number of odds are: ' + oddSum);
	console.log('The number of evens are: ' + evenSum);
}

//  function which takes any number of arguments and return the sum of the arguments
function sumOfArgs(...args) {
	let sum = 0;
	for(let num of args) {
		sum += num;
	}
	return sum;
}

// function which generates a randomUserIp
let randomIP = () => {
	let min = 100;
	let max = 200;
	let ipArr = [];
	for (let i = 0; i < 4; i++) {
		let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
		ipArr.push(randNum);
	}
	let IP = `${ipArr[0]}.${ipArr[1]}.${ipArr[2]}.${ipArr[3]}`;
	return IP;
}

// function which generates random MacAdress
let macAdress = () => {
	const characters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
	let randChar = [];
	for(let i = 0; i < 12; i++) {
		randChar.push(characters[i]);
	}
	return randChar;
	let randMac = 	`${randChar[1]}${randChar[2]}.${randChar[3]}${randChar[4]}.${randChar[5]}${randChar[6]}.${randChar[7]}${randChar[8]}.${randChar[9]}${randChar[10]}.${randChar[11]}${randChar[0]}`
}