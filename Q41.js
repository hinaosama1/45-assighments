/*41. Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array. */
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Array of magician's names
var magicianNames = ['DERREN BROWN', ' DAVID BLAINE', ' CRISS ANGEL', 'DYNAMO'];
// Calling the function to print magician's names
console.log(magicianNames);
