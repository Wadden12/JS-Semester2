
// const interestRate = .3;
// // use Constant if the variable should not change//

// let age = 30;
// let person = {
//     name: "Mike",
//     age: 30
// };

// // Dot Notation
// person.name = "John";

// //Bracket Notation

// person['name'] = 'Mary';
// console.log(person);

let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
console.log(selectedColours);
console.log(selectedColours.length);

function greet(name) {
    console.log(`Hello ${name}`);
}
greet('Mike');

function square(number) {
    return number * number;

}

let number = square(4);
console.log(number);

let x = 1;
let y = 3;

//  console.log(x + y);
//  console.log(x - y);
//  console.log(x * y);
//  console.log(x / y);
//  console.log(x % y);
//  console.log(x ** y);

// console.log(x++);
// console.log(x);
// console.log(--x);
// console.log(x);

// x += 5;
// console.log(x);

// x %=2;
// console.log(x);


// // console.log(x === 1);

// // console.log(x !== 1);
// // Not equal


// let points = 90;

// let type = points > 100 ? 'gold' : 'silver';
// // ? if true do this : is or do this

// console.log(type);

// // logical and (&&)
// // Returns True if both operands are True

// console.log(false && true);

// let highIncome = false;
// let goodCreditScore = false;

// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// // Logically Or is indicated by (||)
// // Returns True if one of the operands is true

// eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// //Not(!)

// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);


// let a ='red';
// let b ='blue';
// let c = a;
//  a = b;
//  b= c;

// console.log(a);
// console.log(b);

// let hour = 10;

// if (hour >= 6 && hour <12)
//     console.log("Good Morning!");

// else if (hour >= 12 && hour < 18)
//     console.log("Good Afternoon");

// else
//     console.log("Good evening!");

//     let role ='guest';
//     switch (role){
//         case 'guest':
//             console.log('Guest User');
//             break;

//         case 'moderator':
//             console.log('Moderator User');
//             break;

//         default:
//             console.log('Unknow User');

//     }
//     if (role === 'guest') console.log('Guest User');
//     else if (role === 'moderator') console.log('Moderator');
//     else console.log('Unknow User');

//     for(let i=1; i <= 5; i++){
//         if (i % 2 !==0) console.log(i);
//     }

//     for(let i=5; i >= 1; i--){
//         if (i % 2 !==0) console.log(i);
//     }

// // let i = 0;

// // while (i <= 5){
// //     if (i % 2 !==0) console.log(i);
// //     i++;

// // }

// let i = 0;

// do{
//     if (i % 2 !==0) console.log(i);
//     i++; 
// } while (i<=5);

const person = {
    name: 'Mike',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
//     console.log(color);

let i = 0;
while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}

while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

function max(x, y) {
    return (x > y) ? x : y;
}

console.log(max(3, 2))

function isLandscape(width, height) {
    return (width > height);
}

console.log(isLandscape(500, 200));

const output = FizzBuzz(7);
console.log(output);

function FizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}

checkSpeed(55);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log("ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log("Suspend Licence");
    else
        console.log('Points', points);
}


showNumbers(10);

function showNumbers(limit) {

    for (let i = 0; i <= limit; i++) {

        if (i % 2 === 0)
            console.log(`${i} "EVEN"`);

        else
            console.log(`${i} "ODD"`);
    }


}

showNumbers1(10);
function showNumbers1(limit) {

    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }

}

console.log(countTruthy([1, 2, 3, 4, 5, 6, 0]))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

function showProperties(obj) {

    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}


console.log(sum(10));

function sum(limit) {
    let sumTotal = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 == 0)
            sumTotal += i;
    }

    return sumTotal
}

const marks = [80, 80, 50, 40];
console.log(calculateGrade(marks));

function calculateGrade(marks) {

    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

    function calculateAverage(array) {
        let sum = 0;
        for (let value of array)
            sum += value;
        return sum / array.length;

    }
}

showStars(5);

function showStars(rows) {
    let star = '';
    for (let i = 0; i < rows; i++)
        console.log(star += '*');
}

showPrimes(10);
// 2 is the first prime number

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

// Object Lessons

//Factory Function

//radius is the same as radius: radius

//draw: function(){} can be written as 
// draw(){codeblock}


function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

// constructor Function
// Naming convention is different 
// pascal notation:

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}

// new creates 3 things
//1. sets object to empty
//2. points this at the object
//3. returns object from the function
// pick one or the other and get use

// const circle = new Circle(1);

console.log()

var users = [
    {
        firstName: "Alan",
        lastName: "Smith",
        email: "alansmith@gmail.com",
        loggedIn: false,
        level: 3,
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        email: "bobsmith@gmail.com",
        loggedIn: true,
        level: 5,
    },
    {
        firstName: "Christina",
        lastName: "Smith",
        email: "christinasmith@gmail.com",
        loggedIn: false,
        level: 6,
    },
];
users.forEach(function (user) {
    console.log(user);
});


const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

if ('radius' in circle) console.log('yes');

//   const another = {};
// //   for (let key in circle)
// //     another[key] = circle[key];

//  const another = Object.assign({}, circle);

const another = { ...circle };

// takes all the data from one object and copies it into the new object

console.log(another);

// const address ={
// street: "11 First Avenue",
// city: "St.John's",
// postalCode: "A1A1A5"

// }

// function showAddress(address){
//     for (let key in address)
//     console.log(key, address[key])

// }

// showAddress(address);

function createAddress(street, city, postalCode) {
    return {
        street,
        city,
        postalCode
    };
}
let address = new Address('first', 'second', 'thrid');
let address1 = new Address('first', 'second', 'thrid');
let address2 = new Address('first', 'second', 'thrid');
// const address = new Address('first','second','thrid');

console.log(address);


function Address(street, city, postalCode) {
    this, street = street;
    this.city = city;
    this.postalCode = postalCode;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));


function areSame(address1, address2) {
    return address1 === address2;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.cty &&
        address1.postalCode === address2.postalCode;
}

let blogPost = {
    title: "My First Blog",
    body: "This is my first blog. i hope you enjoy",
    author: "Mike Wadden",
    views: 1000,
    comment: [
        { author: "Mark Dade", body: "This blog was terrible" },
        { author: "John Smith", body: "This blog was Great" },
    ],
    isLive: true

};

console.log(blogPost);


function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;

}

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'expensive', minPerPerson: 21, maxPerPerson: 50 },
];


// Array

const numbers = [3, 4, 1];

//end 
numbers.push(5, 6);
//beginning 

numbers.unshift(1, 2);
console.log(numbers);

numbers.splice(2, 0, "a", "b");

// first value is postion, second is to delete, thrid is what to add

console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' }
];

const course = courses.find(function (courses) {
    return courses.name === 'a';

});
// can alos use .findIndex to find the index
console.log(course);

//arrow function

const course2 = courses.find(courses => {
    return courses.name === 'a';

});

console.log(course2);


// shorthand verison  course.find(course => course.name === 'a'); only with single parameter and return line this works

// end

const last = numbers.pop();

//beginning
const first = numbers.shift();

console.log(numbers);
console.log(first);
console.log(last);
numbers
// middle

numbers.slice(2, 1);

// numbers.length = 0; empties a array

// numbers.splice(0,numbers.length); another way to do it

const second = [1, 2, 3];
const third = [4, 5, 6];

// const combined = second.concat(third);
//  const slice = combined.slice();

const combined = [...second, 'a', ...third, 'b'];
// can add elements between the arrays
// combined.slice() makes a copy
const copy = [...combined];
console.log(combined);
console.log(copy);
// console.log(slice);

for (let number of numbers)
    console.log(number);

numbers.forEach((number, index) => console.log(index, number));


const program = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];

program.sort(function (a, b) {
    const nameA = a.name.toUpperCase;
    const nameB = b.name.toUpperCase;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(program);

const newNumbers = [1, 2, 3, 4, 5, 6];

const allPositive = newNumbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

// newNumbers.some looks if atleast one number is true

const number3 = [1, -1, 2, 3, -4, 5];

const filter = number3.filter(value => value >= 0);

console.log(filter);

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));


// a=0, c =1 => a=1
// a=1, c=-1 => a=0 
const sum2 = number3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

}, 0)

console.log(sum2);

const numbers4 = arrayFromRange(-10, -4);

console.log(numbers4);

function arrayFromRange(min, max) {
    let array = [];
    for (let i = min; i <= max; i++)
        array.push(i);
    return array

}

const number5 = [1, 2, 3, 4, 1, 1, 1];
console.log(includes(number5, 1));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;

}
const output1 = except(number5, [1, 2]);
console.log(output1);
function except(array, excluded) {
    let output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output
}

const output2 = move(number5, 1, -1);

console.log(output2);

function move(array, index, offset) {
    const postion = index + offset;
    if (postion >= array.length || postion < 0) {
        console.error('Invalid offset.');
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(postion, 0, element);
    return output;
}

const count = countOccurrences(number5, 1);
console.log(count);


function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;

}

// go back and look at the reduce method in exercise 5

const numbers7 = [1, 2, 3, 4, 5, 6, 7];

const Max = getMax(numbers7);

console.log(Max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}
// let max = array[0];
// for (let i = 1; i < array.length; i++)
//     if (array[i] > max)
//         max = array[i];
// return max;

// shift alt down arrow duplicate 
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];
// all movies in 2018 with rating > 4
// sort them by tehrir rating
// descending order
//pick their titles


const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
console.log(titles);

function sum(...args) {
    return args.reduce((a, b) => a + b);

}

console.log(sum(1, 2, 3, 4, 5, 6, 7))

function sum1(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

const circle3 = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle3.area);

try {
    const count = countOccurrences1(number5, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences1(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence
    }, 0);

}


const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

// non arrow way

// const activeJobs = jobs.filter(function(job){return job.isActive;});

// arrow

const activeJobs = jobs.filter(job => job.isActive);

const person = {
    talk() {
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
};

// arrow functions do not rebind this

const newColors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);

// destructure 

const address = {
    street: '',
    city: '',
    country: ''
};
// same as const street = address.street; etc
const { street, city,county} = address;

// spead method

const tenth = [1,2,3];
const eleven = [4,5,6];

const combined = [...tenth, 'a', ...eleven];


class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log('walk')
    }
}

const person = new Person('Mosh');

class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}

const teacher = new Teacher('Mosh', 'Msc');

// import {Teacher} from './teacher';

// export class Teacher extends Person

// watch video 13-14









