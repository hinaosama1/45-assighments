/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you
want to try more comparisons, write more tests. Have at least one True and one False result for
each of the following:
" Tests for equality and inequality with strings
" Tests using the lower case function
" Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
" Tests using "and" and "or" operators
" Test whether an item is in a array
" Test whether an item is not in a array*/
//equility and inequility
var MynAmE = "Hooria";
console.log(MynAmE == "Hooria"); //true    equal to
console.log(MynAmE !== "hooria"); //true not equal to
//numberics
var anyNumber = 10;
console.log(anyNumber == 10); //true
console.log(anyNumber !== 10); //true
console.log(anyNumber > 5); //true  greater then
console.log(anyNumber < 5); //false  less then
console.log(anyNumber <= 5); //false less then and equal to
console.log(anyNumber >= 5); //true greater then and equal to
// and & ==== or |
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
//true statement ,// flse statement
console.log(num1 > 9 || num2 < 5); //ture
//ture stat         false stat
var Myarray = [2, 3, "Hooria"];
var myString = "Osama";
console.log(Array.isArray(Myarray)); //true
console.log(Array.isArray(myString)); //false  
