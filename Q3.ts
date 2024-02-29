
/*
Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase.*/

const personName = "Hina Azhar"

//lowercase

console.log(personName.toLocaleLowerCase());

//uppercase

console.log(personName.toLocaleUpperCase());

//titlecase

let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(1).toLowerCase();
let titlecase = firstLetter + restLetters;
console.log (titlecase);