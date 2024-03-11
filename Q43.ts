/*3. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with the Great added to each 
magician’s name.*/

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}

// Array of magician's names
const magicianNames =  ['DERREN BROWN', ' DAVID BLAINE', ' CRISS ANGEL', 'DYNAMO'];

// Calling makeGreat() with a copy of the original array

const greatMagicianNames = makeGreat([...magicianNames]);

// Showing original magician names

console.log("Original Magician Names:");
showMagicians(magicianNames);

// Showing magician names with "the Great" added

console.log("\nModified Magician Names:");
showMagicians(greatMagicianNames);