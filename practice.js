// You are given an array:
/*
    Practice Problem 1

    var fruits = ["Apple", "Banana" , "Orange"];

    1. Find the index of 'Banana' and replace 'Banana' with 'Mango'
    2. Remove 'Orange' and add 'Watermelon'

*/

/*
solution of practice 1

var fruits = ["Apple", "Banana", "Orange"];
var index = fruits.indexOf("Banana");
console.log("Index of Banana is ", index);
fruits[2] = "watermelon";
console.log(fruits);

*/

/*
    Practice Problem 2

    You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and john's score is 40. The grading Chart is 

    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade

    Write a program to find your and your friends grades using if-else.

*/

/*
    Solution of prctice 2

    var myself = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if (myself >= 80) {
  console.log("You Got A Grade");
} else if (myself >= 60) {
  console.log("You Got B Grade");
} else if (myself >= 50) {
  console.log("You Got C Grade");
} else if (myself >= 40) {
  console.log("You Got D Grade");
} else if (myself <= 39) {
  console.log("You Got F Grade");
} else {
  console.log("Your Marks are invalid");
}
if (tom >= 80) {
  console.log("tom Got A Grade");
} else if (tom >= 60) {
  console.log("tom Got B Grade");
} else if (tom >= 50) {
  console.log("tom Got C Grade");
} else if (tom >= 40) {
  console.log("tom Got D Grade");
} else if (tom <= 39) {
  console.log("tom Got F Grade");
} else {
  console.log("tom Marks are invalid");
}
if (jane >= 80) {
  console.log("jane Got A Grade");
} else if (jane >= 60) {
  console.log("jane Got B Grade");
} else if (jane >= 50) {
  console.log("jane Got C Grade");
} else if (jane >= 40) {
  console.log("jane Got D Grade");
} else if (jane <= 39) {
  console.log("jane Got F Grade");
} else {
  console.log("Jane Marks are invalid");
}
if (peter >= 80) {
  console.log("peter Got A Grade");
} else if (peter >= 60) {
  console.log("peter Got B Grade");
} else if (peter >= 50) {
  console.log("peter Got C Grade");
} else if (peter >= 40) {
  console.log("peter Got D Grade");
} else if (peter <= 39) {
  console.log("peter Got F Grade");
} else {
  console.log("Your Marks are invalid");
}
if (john >= 80) {
  console.log("john Got A Grade");
} else if (john >= 60) {
  console.log("john Got B Grade");
} else if (john >= 50) {
  console.log("john Got C Grade");
} else if (john >= 40) {
  console.log("john Got D Grade");
} else if (john <= 39) {
  console.log("john Got F Grade");
} else {
  console.log("john Marks are invalid");
}

*/

/*
    Practice Problem 3

    1. You are given three numbers 13, 79 and 45 . Write a program that will print the largest number using if-else

    2. You are given with a triangle with the sides 9, 8, 9 .Write a program to check whether a triangle is Isosceles or not using if-else.

    Isosceles = two sides are equal

*/

/*
    Solution of Practice Problem 3

    1.
    var first = 12;
    var second = 79;
    var third = 45;

    if (first > second && first > third) {
    console.log("First number is the largest number");
    } else if (second > first && second > third) {
    console.log("Second number is the largest number");
    } else if (third > first && third > second) {
    console.log("Third number is the largest number");
    } else {
    console.log("Numbers are invalid");
    }

    2.
    var side1 = 9;
    var side2 = 8;
    var side3 = 9;

    if (side1 === side2 && side1 !== side3) {
    console.log("The triangle is Isosceles");
    } else if (side2 === side3 && side2 !== side1) {
    console.log("The triangle is Isosceles");
    } else if (side3 === side1 && side3 !== side2) {
    console.log("The triangle is Isosceles");
    } else {
    console.log("The trianle is not Isosceles");
    }
*/
