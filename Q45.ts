/*5. Cars: Write a function that stores information about a car in a Object. The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of 
keyword arguments. Call the function with the required information and two other name-value 
pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly.*/
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other properties
}

function createCar(manufacturer: string, model: string, extras: Record<string, any>): Car {
    return {
        manufacturer: manufacturer,
        model: model,
        ...extras
    };
}

// Creating a car object with manufacturer, model, and additional properties
const myCar: Car = createCar('corrola', 'Altis', { color: 'black', year: 2024 });

// Printing the object to ensure all information was stored correctly
console.log(myCar);