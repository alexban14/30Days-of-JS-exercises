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

// 3)Find people who are MERN stack developer from the users object

// 4)Set your name in the users object without modifying the original users object

function setName() {
	const copyUsers = Object.assign(users, {
		Alex: {
			email: 'paul@paul.com',
			skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
			age: 20,
			isLoggedIn: false,
			points: 40
		}
	});
	return copyUsers;
}

// 4) Get all keys or properties of users object

function getKeys() {
	const userskeys = Object.keys(users);
	return userskeys;
}

// 5) Get all the values of users object

function getValues() {
	const userVal = Object.values(users);
	return userVal;
}

// LVL 3

// 1) Create an object literal called personAccount.
const personAccount = {
	firstName: 'Ban',
	lastName: 'Alex',
	incomes: {
		salary: 2000,	
		stocks: 500,
		crypto: 500,
		rents: 500,
	},
	expenses: {
		kids: 400,
		fuel: 300,
		clothes: 300,
		food: 1000,
		rate: 500
	},

	totalIncome() {
		return `Total income: ${this.incomes.crypto + this.incomes.salary + this.incomes.stocks + this.incomes.rents}$`;
	}
}

// 2); 3); 4)
const userz = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

// 2) a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const singUp = (userName) => {
	if(userz.find(object => object.username === userName)) {
		return 'You are already in the database!'
	}
	return userz.push({ username: userName});
}

// 2) b. Create a function called signIn which allows user to sign in to the application

const signIn = (userName, id) => {
	if(userz.find(object => object.username === userName) && userz.find(object => object._id === id)) {
		return 'Welcom back, logged in!'
	}
	return 'Username or id not found!'
}

// 3)
    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// 3) a. Create a function called rateProduct which rates the product 
const rating = {  }
const rateProduct = (product, rating) => {
	function findProd() {
		products.find(object => object.name === product)
	}
	let index = products.findIndex(findProd);
	if(!index) {
		return 'We could not get find the product!'
	}
	return products[index].ratings.push(rating);
} 
