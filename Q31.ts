/*1. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty. 
" If the list is empty, print the message We need to find some users!
" Remove all of the usernames from your array, and make sure the correct message is printed*/

let UserName2:string[] = ["admin", "hooria", "osama", "Asiya", "sughra", "ayesha"];

//to remove all members use,
//1st statement
UserName2 = [];
console.log(UserName2);

//now comment out the 1st statement then print the next statement in console
if(UserName2.length > 0){
    for(let i = 0; i < UserName2.length; i ++){
        if(UserName2[i] == "admin"){
            console.log(`hello ${UserName2 [i]} would you like to see a status report?\n`)
        }else{
            console.log(`hello ${UserName2 [i]} thank you for logging in again!`)
        }
    }
    
}else{
    console.log(`we need to find some users`);
}




