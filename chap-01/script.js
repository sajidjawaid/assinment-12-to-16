// Chapter no 1

// qno1
alert("Welcome to our website!");
// qno2
alert("Error! Please enter a valid password");
// qno3
alert("Welcome to javascript land  Happy Coding");
// qno4
alert("Welcome to javascript land");
// qno5
alert("Welcome to javascript land");
console.log(
  "This message is generated through the browser's developer console."
);

// chapter no 2

// qno 1
var username;
// qno 2
var myName = "Sajid Jawed";

// qno 3
var message;
message = "Hello World";
alert(message);

// qno 4
var studentName = "sajid";
var studentAge = 30;
var studentGrade = "A";
var studentInfo =
  "Name: " + studentName + "\nAge: " + studentAge + "\nGrade: " + studentGrade;
alert(studentInfo);

// qno 5

var pizza = "pizza";
alert(
  pizza +
    " " +
    pizza.substring(0, 4) +
    " " +
    pizza.substring(0, 3) +
    " " +
    pizza.substring(0, 2) +
    " " +
    pizza.substring(0, 1)
);

// qno 6

var email = "sajidjaved43@gmail.com";
alert("My email address is: " + email);

// qno 7
var book = "A smarter way to learn JavaScript";
alert(book);

// qno 8

document.write("hello i can write html content through javascript");

//qno 9

var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);
document.write(specialString);

// // // // // // // chapter 3

// qno 1

var age = 30;
alert("Your age is: " + age)

// qno 2

var visitCount = 0;
if (localStorage.getItem("visitCount")) {
  visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
} else {
  visitCount = 1;
}
localStorage.setItem("visitCount", visitCount);
document.write("You have visited this site " + visitCount + " times.");

// qno 3

var birthYear = 1994;
document.write("My birth year is " + birthYear);

// qno 4

var visitorName = "sajid";
var productTitle = "T-shirt";
var quantity = 5;

document.write(
  visitorName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    "(s) on XYZ Clothing store."
);

// chapter 4

// qno 1

var var1, var2, var3;

// qno 2

var legalName = "$myVariable";
var legalName2 = "my_variable";
var legalName3 = "myVariable";
var legalName4 = "myVariable1";
var legalName5 = "_myVariable";

// qno 3

document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "<p>Variable names can only contain letters, digits, underscores, and dollar signs. For example: $my_1stVariable</p>"
);
document.write(
  "<p>Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name</p>"
);
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS reserved words</p>");

// // // // // // // // // // chapter  5

// qno 1

var num1 = 10;
var num2 = 5;

var sum = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

// qno 2

var num1 = 10;
var num2 = 5;

var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;

document.write("Subtraction result: " + difference + "<br>");
document.write("Multiplication result: " + product + "<br>");
document.write("Division result: " + quotient + "<br>");
document.write("Modulus result: " + remainder);

// qno 3

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder);

// qno 4

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write(
  "The cost of buying 5 tickets to a movie is: " + totalCost + " PKR"
);

// qno 5

var number = 5;
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}

// qno 6

var celsiusTemp = 30;
var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

var fahrenheitTemp2 = 86;
var celsiusTemp2 = ((fahrenheitTemp2 - 32) * 5) / 9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// qno 7

var priceItem1 = 25;
var priceItem2 = 30;
var quantityItem1 = 3;
var quantityItem2 = 2;
var shippingCharges = 5;

var totalCost =
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<p><strong>Total Cost: $" + totalCost + "</strong></p>");

// qno 8

var totalMarks = 500;
var marksObtained = 420;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// qno 9

var totalUSDollars = 10;
var totalSaudiRiyals = 25;
var usdToPKR = 104.8;
var sarToPKR = 28;
var totalPKR = totalUSDollars * usdToPKR + totalSaudiRiyals * sarToPKR;
document.write("Total amount in Pakistani Rupees: " + totalPKR);

// qno 10
var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("Result of arithmetic operations: " + result);

// qno 11

var currentYear = new Date().getFullYear();
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old");

// qno12

var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));

// qno13

var favoriteSnack = "chocolate";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 2;

var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmountNeeded = daysRemaining * amountPerDay;

document.write(
  "You will need " +
    totalAmountNeeded +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge
);

// chapter 6 to 9

// qno 2

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

// qno 3

var name = prompt("Enter your name:");
alert("Hello, " + name + "! Welcome to our website!");

// qno4

var number = prompt("Enter a number:");
if (number === "" || isNaN(number)) {
  number = 5; // Default number if user doesn't enter a valid input
}
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}

// qno 5

var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

var totalMarks = 100;
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<h2>Result</h2>");
document.write("<table border='1'>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks3 +
    "</td></tr>"
);
document.write("</table><br>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

// // // // // chapter 9 to 11

// qno 1

var cityName = prompt("Enter the city name:");
if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights!");
}

// qno 2

var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid input! Please enter 'male' or 'female'.");
}

// qno 3

var color = prompt("Enter the color of the road traffic signal:");

switch (color.toLowerCase()) {
  case "red":
    alert("Must Stop");
    break;
  case "yellow":
    alert("Ready to move");
    break;
  case "green":
    alert("Move now");
    break;
  default:
    alert("Invalid input! Please enter 'red', 'yellow', or 'green'.");
}

// qno 4

var remainingFuel = parseFloat(
  prompt("Enter the remaining fuel in your car (in litres):")
);

if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// qno 5

// a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// qno 7

// Guess game:
var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again!");
}

// qno 8

var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("The number is not divisible by 3");
}

// qno 9

var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// qno 10

var temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It is freezing outside!");
}

// qno 111

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation!");
}

alert("Result: " + result);
