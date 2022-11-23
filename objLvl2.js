const users = {
	Alex: {
	  email: 'alex@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript'],
	  age: 20,
	  isLoggedIn: false,
	  points: 30
	},
	Asab: {
	  email: 'asab@asab.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 25,
	  isLoggedIn: false,
	  points: 50
	},
	Brook: {
	  email: 'daniel@daniel.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
	  age: 30,
	  isLoggedIn: true,
	  points: 50
	},
	Daniel: {
	  email: 'daniel@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	John: {
	  email: 'john@john.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
	  age: 20,
	  isLoggedIn: true,
	  points: 50
	},
	Thomas: {
	  email: 'thomas@thomas.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	Paul: {
	  email: 'paul@paul.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	}
  }

// 1) Find the person who has many skills in the users object.

// function mostSkills(users) {
// 	switch(users) {
// 		case
// 	}
// }

// 2) Count logged in users, count users having greater than equal to 50 points from the following object.

function countUsers() {
	let count = 0;
	const usersKeys = Object.entries(users);
	// for (let user in users) {
	// 	if( user['points'] >= 50 && user['isLoggedIn'] ) {
	// 		count += 1;
	// 	}
	// }
	usersKeys.forEach(key => console.log(key['points']));
	// usersKeys.forEach(key => {
	// 	if( key.Object['points'] >= 50 && key.Object['isLoggedIn']) {
	// 		count++
	// 	}
	// });
	return count;
}
