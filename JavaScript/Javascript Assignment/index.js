// Develop by Mike Wadden
// Java Script Assignent
// Feb 16,20222

// Question 1

console.log("Questions 1");
console.log("-----------------");
console.log(reverseNumber(15243));

function reverseNumber(x) {
  x = String(x);
  const arrayOfX = Array.from(x, Number);
  const arrayOfReverse = arrayOfX.reverse();
  return +arrayOfReverse.join("");
}

//Question 2.
console.log("Questions 2");
console.log("-----------------");

buildArray(5, 10);

function buildArray(x, y) {
  const array = [];
  for (let i = x; i <= y; i++) {
    array.push(i);
  }
  return console.log(array);
}

//Question 3.
console.log("Questions 3");
console.log("-----------------");

wordScambler("keyincollege");

function wordScambler(word) {
  const arrayOfString = Array.from(word, String);
  const alphaString = arrayOfString.sort();
  return console.log(alphaString.join(""));
}

// Question 4

console.log("Questions 4");
console.log("-----------------");

fileExtension("text.txt");

function fileExtension(fileName) {
  let fileSplit = fileName.split(".");
  return console.log(fileSplit[1]);
}
//Question 5

console.log("Questions 5");
console.log("-----------------");

firstChild("we are students of keyin college");

function firstChild(sentence) {
  let words = sentence.split(" ");
  let newWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return console.log(newWords.join(" "));
}

// Question 6

console.log("Questions 6");
console.log("-----------------");

function wordComponets(word) {
  let length = word.length;
  let componets = [];
  const arrayOfString = Array.from(word, String);
  console.log(arrayOfString);
  for (i = 0; i < length; i++) {
    for (j = i; j < length; j++) {
      let componet = arrayOfString.slice(i, j + 1);
      componets.push(componet.join(""));
    }
  }
  return componets;
}

console.log(wordComponets("celtics"));

//Question 7

console.log("Questions 7");
console.log("-----------------");

function currentDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  console.log();
  today = ` ${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy} or ${dd}-${mm}-${yyyy}, ${dd}-${mm}-${yyyy} `;
  console.log(today);
  console.log();
}

currentDate();

// Question 8

console.log("Questions 8");
console.log("-----------------");

let student = {
  name: "Mike Wadden",
  college: "Keyin College",
  class: "Semester 2",
  rollno: 1289,
  course: "Software Development",
};

showProperties(student);

function showProperties(obj) {
  console.log(obj);
}

//question 9
console.log("Questions 9");
console.log("---------------------------");
showProperties(student);

deleteProperties(student);

function deleteProperties(obj) {
  console.log(obj);
  console.log("---------------------------");
  delete obj.rollno;
  console.log(obj);
}

console.log("Questions 10");
console.log("-----------------");

function readStatus() {
  if (this.readingStatus === true) return "Already read";
  return "You need to read this";
}

let books = [
  {
    author: "George Steven",
    title: "Javascript made easy",
    readingStatus: true,
  },
  {
    author: "John Smith",
    title: "Headstart JS",
    readingStatus: true,
  },
  {
    author: "Peter Sham",
    title: "Java Complete Reference",
    readingStatus: false,
  },
];

console.log();
books.forEach(function (book) {
  book.readingStatus === true
    ? console.log(`${book.title} by ${book.author}: Already read. `)
    : console.log(`${book.title} by ${book.author}: You need to read this.`);
});
console.log();

// you are adding the multiples of 28

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    // console.log(`i ${i}`);
    // console.log(`${number % i}`);

    if (number % i === 0) {
      temp += i;

      //   console.log(`temp ${temp}`);
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(28);

function isPrime(n, i) {
  // Base cases
  if (n <= 2) return n == 2 ? true : false;
  if (n % i == 0) return false;
  if (i * i > n) return true;

  // Check for next divisor
  return isPrime(n, i + 1);
}

let n = 18;

if (isPrime(n, 2)) console.log(`${n} is a prime number`);
else console.log(`${n} is not a prime number`);
