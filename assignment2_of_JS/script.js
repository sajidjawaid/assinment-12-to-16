// // // // // Chapter 12 and 13

// question 1

function checkCharacter(char) {
  var charCode = char.charCodeAt(0);
  if (char >= "0" && char <= "9") {
    console.log(char + " is a number.");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log(char + " is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log(char + " is a lowercase letter.");
  } else {
    console.log(char + " is not a number or letter.");
  }
}

// // question 2

function compareIntegers(num1, num2) {
  if (num1 === num2) {
    console.log("Both numbers are equal.");
  } else if (num1 > num2) {
    console.log(num1 + " is larger than " + num2 + ".");
  } else {
    console.log(num2 + " is larger than " + num1 + ".");
  }
}

compareIntegers(5, 10);
compareIntegers(7, 7);

// // question 3

function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is a positive number.");
  } else if (num < 0) {
    console.log(num + " is a negative number.");
  } else {
    console.log(num + " is zero.");
  }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

// // question 4

function isVowel(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
}

console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("E"));
console.log(isVowel("x"));

// // question 5

var correctPassword = "password123";

var enteredPassword = prompt("Please enter your password:");

if (!enteredPassword) {
  console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
  console.log(
    "Correct! The password you entered matches the original password."
  );
} else {
  console.log("Incorrect password.");
}

// // // question 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

// // question 7

var time = prompt(
  "Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"
);

if (time >= 0 && time < 1200) {
  console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  console.log("Good night!");
} else {
  console.log("Invalid time format entered.");
}

// // // // // // // // // // Chapter 14 and 16

// question 1
var studentNames = [];

// question 2

var studentNames = new Array();

// question 3

var stringsArray = ["apple", "banana", "orange"];

// question 4

var numbersArray = [1, 2, 3, 4, 5];

// question 5

var booleanArray = [true, false, true];

// question 6

var mixedArray = ["apple", 3, true, "banana", 5];

// question 7

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// question 8

var studentNames = ["Alice", "Bob", "Charlie"];
var scores = [380, 420, 450];
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < scores.length; i++) {
  percentages.push((scores[i] / totalMarks) * 100);
}
console.log("Student Scores and Percentages:");
for (var i = 0; i < studentNames.length; i++) {
  console.log(
    studentNames[i] +
      " scored " +
      scores[i] +
      " out of " +
      totalMarks +
      " with a percentage of " +
      percentages[i] +
      "%"
  );
}

// question 9

var colors = ["red", "green", "blue"];

document.write("<b>Initial Array:</b> " + colors + "<br>");

var colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart);

document.write(
  "<b>Array after adding color to the beginning:</b> " + colors + "<br>"
);

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

document.write(
  "<b>Array after adding color to the end:</b> " + colors + "<br>"
);

colors.unshift("yellow", "orange");

document.write(
  "<b>Array after adding two more colors to the beginning:</b> " +
    colors +
    "<br>"
);

colors.shift();

document.write(
  "<b>Array after deleting the first color:</b> " + colors + "<br>"
);

colors.pop();

document.write(
  "<b>Array after deleting the last color:</b> " + colors + "<br>"
);

var indexToAdd = prompt("Enter the index to add color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

document.write(
  "<b>Array after adding color at the desired index:</b> " + colors + "<br>"
);

var indexToDelete = prompt("Enter the index to delete color(s):");
var countToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, countToDelete);

document.write(
  "<b>Array after deleting color(s) from the desired index:</b> " +
    colors +
    "<br>"
);

// question 10

var studentScores = [85, 92, 78, 90, 88];

studentScores.sort();

console.log(studentScores);

// question 11

var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
var selectedCities = [];
selectedCities = cities.slice(0, 3);
console.log("Selected Cities:", selectedCities);

// question 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);

// question 13

var fifoArray = [];

function addToFIFO(value) {
  fifoArray.push(value);
}

function removeFromFIFO() {
  return fifoArray.shift();
}

addToFIFO(10);
addToFIFO(20);
addToFIFO(30);

console.log(removeFromFIFO());
console.log(removeFromFIFO());
console.log(removeFromFIFO());

// question 14

var lifoArray = [];

function addToLIFO(value) {
  lifoArray.unshift(value);
}

function removeFromLIFO() {
  return lifoArray.shift();
}

addToLIFO(10);
addToLIFO(20);
addToLIFO(30);

console.log(removeFromLIFO());
console.log(removeFromLIFO());
console.log(removeFromLIFO());

// question 15

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
var selectMenu = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
  selectMenu +=
    "<option value='" +
    phoneManufacturers[i] +
    "'>" +
    phoneManufacturers[i] +
    "</option>";
}
selectMenu += "</select>";
document.write(selectMenu);
