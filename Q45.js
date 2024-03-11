var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, extras) {
    return __assign({ manufacturer: manufacturer, model: model }, extras);
}
// Creating a car object with manufacturer, model, and additional properties
var myCar = createCar('corrola', 'Altis', { color: 'black', year: 2024 });
// Printing the object to ensure all information was stored correctly
console.log(myCar);
