console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
// let numberString: string = '42'
// let realNumber: number = 7
// todo: swap the values in the varaibles and log the results
var numberString = '7';
console.log(numberString);
var realNumber = 42;
console.log(realNumber);
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
var mixedArray = [10, '34', 3, '17'];
var bayOfIslands = ['Bay of Islands', 35.2167, 174.1541];
var suva = ['Suva', 18.1405, 178.4233];
var azores = ['Azores', 37.7412, 25.6756];
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(bayOfIslands);
function area(s) {
    if (s.kind === "square") {
        return s.width * s.width;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (Math.pow(s.radius, 2));
    }
    else {
        return -1;
    }
}
// Todo - write area function here
