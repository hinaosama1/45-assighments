"use strict";
/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
" Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
" Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print a message to that person letting them know you’re sorry you can’t invite
them to dinner.
" Print a message to each of the two people still on your list, letting them know they’re still invited.
" Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program*/
const Myfriends = ["ayesha", "Osama", "Asiya", "Sughra", "mahnoor", "hassan\n"];
console.log(`table is not available, i can only invite 2 persons\n`);
//removes all 4 last elements
let friend1 = Myfriends.pop();
console.log(`sorry miss. ${friend1}) you are not invited!`);
let friend2 = Myfriends.pop();
console.log(`sorry miss. ${friend2}) you are not invited!`);
let friend3 = Myfriends.pop();
console.log(`sorry miss. ${friend3}) you are not invited!`);
let friend4 = Myfriends.pop();
console.log(`sorry dear. ${friend4}) you are not invited!`);
for (let i = 0; i < Myfriends.length; i++) {
    console.log(`dear. ${Myfriends[i]} you are still invited`);
}
Myfriends.pop();
Myfriends.pop();
console.log(Myfriends);
