/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
" Make a array of your three favorite fruits and call it favorite_fruits.
" Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
in your array, the if block should print a statement, such as You really like bananas! */
// 1 statement
var FavoriteFruits = ["apple", "mango", "orange"];
if (FavoriteFruits.includes("banana")) {
    console.log("i woukd like to eat banana");
}
else if (FavoriteFruits.includes("apple")) {
    console.log("i would like to eat apple");
}
else {
    console.log("fruits are not available!");
}
// 2nd statement , using another method , add not availble fruit
var Fruitavailable = "banana";
if (FavoriteFruits.includes(Fruitavailable)) {
    console.log("i would like to eat ".concat(Fruitavailable));
}
else {
    console.log("fruit is not available");
}
// 3rd statement , add available fruit
var FruitAvailable = "orange";
if (FavoriteFruits.includes(FruitAvailable)) {
    console.log("i would like to eat ".concat(FruitAvailable));
}
else {
    console.log("fruits are not available");
}
// 4th statement , add  available fruit
var fruiTavailable = "mango";
if (FavoriteFruits.includes(fruiTavailable)) {
    console.log("i would like to eat ".concat(fruiTavailable));
}
// 5th statement , fruit is not available
var fruiTavailAble = "peach";
if (FavoriteFruits.includes(fruiTavailAble)) {
    console.log("i would like to eat ".concat(fruiTavailAble));
}
else {
    console.log("fruit is not available");
}
