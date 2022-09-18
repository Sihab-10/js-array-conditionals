var destinations = ["sajek", "coxsbazar", "nepal", "bali", "SP"];
console.log(destinations[2]);
destinations[2] = "thailand";
console.log(destinations[2]);
var index = destinations.indexOf("bali");
console.log(index);
destinations.push("bhutan");
destinations.pop();
destinations.pop();
console.log(destinations);

//conditionals
// >, <, ==,!=, >=, <= ,
//&&, ||

if (destinations[1] === "sajek") {
} else if (destinations[2] === "bali") {
} else if (destinations.length !== 3) {
} else {
}
