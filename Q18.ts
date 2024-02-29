/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
" Store the locations in a array. Make sure the array is not in alphabetical order. 
" Print your array in its original order.
" Print your array in alphabetical order without modifying the actual list.
" Show that your array is still in its original order by printing it.
" Print your array in reverse alphabetical order without changing the order of the original list. 
" Show that your array is still in its original order by printing it again.
" Reverse the order of your list. Print the array to show that its order has changed.
" Reverse the order of your list again. Print the list to show it’s back to its original order.
" Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed. 
" Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.*/

let myplaces = ["saudia arab","uae", "uk","canada", "us","austria"];
console.log(myplaces);

//making a copy of an aray
let copyofArray = myplaces.slice();
let sortedArry = copyofArray.sort();
console.log(sortedArry);

//printing original array
console.log(myplaces);

//reversing original array
//first we have to make a copy of original array
let copyofArray2 = myplaces.slice()
let reverseoriarray = copyofArray2.reverse();
console.log(reverseoriarray);

//printing original array
console.log(myplaces);

//reverse the order of original array
let reverseoriarray2 = myplaces.reverse();
console.log(reverseoriarray2);

let againreverse = reverseoriarray2.reverse();
console.log(againreverse); // same as original array

//sorting original array
let sortoriArray = myplaces.sort();
console.log(sortoriArray);

let reversesortedArray = sortoriArray.reverse();
console.log(reversesortedArray);

