/*39. City Names: Write a function called city_country() that takes in the name of a city and its 
country. The function should return a string formatted like this: "Lahore, Pakistan" 
Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_Country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with at least three city-country pairs
console.log(city_Country('madina', 'saudia Arab'));
console.log(city_Country('ontario', 'canada'));
console.log(city_Country('sharjah', 'uae'));
