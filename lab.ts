console.clear()
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32

let numberString: string = '32'
let realNumber: number = 7

console.log('Swap the values of these two variables: ');
console.log(numberString)
console.log(realNumber)
// todo: swap the values in the variables and log the results

/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
let arrayComb: [string, number] = ['this is a string', 12]
console.log('Create an array type that is a mix of strings of numbers and actual numbers: ', arrayComb)

// 2. write a function that accepts an array as a parameter, loops over it and converts all the strings to numbers. the function should return a new array of only numbers -- ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]

// Todo write the mixed array of strings and numbers
var mixArr = [10, '34', 3, '17']
console.log(mixArr)

// Todo write a function to convert the mixed array to an array of only numbers
const allNums = ( mixArr: (string | number)[] ) => {
  const newArr = mixArr.map((item) => {
      if (typeof item === 'string'){
    return parseInt(item)
      }else{
          return item
      }

  })  
  return newArr
}
console.log(allNums(mixArr))

/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude

// let cityCoordinate: [string, number, number] = ['city name', 33333, 44444]
type cityCoordinate = [string, number, number]

// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution
const seattle: cityCoordinate = ['Seattle', 123123, 321321] 
const austin: cityCoordinate = ['Austin', 444444, 555555] 

// Todo - create the type definition, and some cities

// 🚨 uncomment this function to test your solution 🚨
function printCityData(city: cityCoordinate): void {
    console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}

printCityData(seattle)
printCityData(austin)


/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces

// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared

interface Square {
    kind: 'square',
    width: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

// Todo - Create union type here
type Shape = Square | Rectangle | Circle

// Todo - write area function here
function area(shape: Shape): number {
    if (shape.kind === 'square') {
        return shape.width * shape.width
    } else if (shape.kind === 'rectangle') {
        return shape.width * shape.height
    } else {
        return shape.radius * shape.radius * Math.PI
    }
}
console.log(area({kind: 'square', width: 12}));
console.log(area({kind: 'circle', radius: 355}));
console.log(area({kind: 'rectangle', width: 42, height: 55}));
