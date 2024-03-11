/*35. Animals: Think of at least three different animals that have a common characteristic. Store the 
names of these animals in a list, and then use a for loop to print out the name of each animal. " 
Modify your program to print a statement about each animal, such as A dog would make a great 
pet. " Add a line at the end of your program stating what these animals have in common. You 
could print a sentence such as Any of these animals would make a great pet! */


let AnimalNames = ["cow", "sheep", "goat", "camel"]

//for loop
for(let i of AnimalNames){

    console.log(i);
}

//printing names & sentence
for(let j of AnimalNames){

    console.log(`${j} is a domestic animal `);

}
console.log(`\n All these animal's ${AnimalNames [0]}, ${AnimalNames [1]}
 ${AnimalNames [2]} ${AnimalNames [3]} meat is halal in islam `);