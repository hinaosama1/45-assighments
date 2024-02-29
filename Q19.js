"use strict";
/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner.
*/
let myfriends = ["Osama", "Asiya", "Sughra", "mahnoor"];
console.log(`i am inviting ${myfriends.length} number of my friends to my dinner which are following\n`);
for (let i = 0; i < myfriends.length; i++) {
    console.log(`${i + 1}. ${myfriends[i]}`);
}
