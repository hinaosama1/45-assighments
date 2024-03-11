/*35. Animals: Think of at least three different animals that have a common characteristic. Store the
names of these animals in a list, and then use a for loop to print out the name of each animal. "
Modify your program to print a statement about each animal, such as A dog would make a great
pet. " Add a line at the end of your program stating what these animals have in common. You
could print a sentence such as Any of these animals would make a great pet! */
var AnimalNames = ["cow", "sheep", "goat", "camel"];
//for loop
for (var _i = 0, AnimalNames_1 = AnimalNames; _i < AnimalNames_1.length; _i++) {
    var i = AnimalNames_1[_i];
    console.log(i);
}
//printing names & sentence
for (var _a = 0, AnimalNames_2 = AnimalNames; _a < AnimalNames_2.length; _a++) {
    var j = AnimalNames_2[_a];
    console.log("".concat(j, " is a domestic animal "));
}
console.log("\n All these animal's ".concat(AnimalNames[0], ", ").concat(AnimalNames[1], "\n ").concat(AnimalNames[2], " ").concat(AnimalNames[3], " meat is halal in islam "));
