/*3. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each
magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames = ['DERREN BROWN', ' DAVID BLAINE', ' CRISS ANGEL', 'DYNAMO'];
// Calling makeGreat() with a copy of the original array
var greatMagicianNames = makeGreat(__spreadArray([], magicianNames, true));
// Showing original magician names
console.log("Original Magician Names:");
showMagicians(magicianNames);
// Showing magician names with "the Great" added
console.log("\nModified Magician Names:");
showMagicians(greatMagicianNames);
