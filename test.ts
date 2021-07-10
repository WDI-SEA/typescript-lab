
// designate type - can use 'any' (default) but discouraged
let num: number = 32
console.log(num)

//

type Style = 'bold' | 'italic' | 23

let font: Style

font = 23 // must be bold or italic or 23 as stated in Style type

// Interface

interface Person {
    first: string,
    last: string,
    [somethingElse: string]: any
}


const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Usain', 
    last: 'Bolt',
    other: 23
}

// functions
function pow(x: number, y: number){
    return Math.pow(x, y)
}

console.log(pow(32, 12))

function stringTest(a: string, b: string){
    return a+b
}

console.log(stringTest('hello', 'world'))

// arrays

type MyList = [number?, string?, boolean?]

const arr: MyList = []

arr.push(1)
arr.push('23')
arr.push(false)

console.log(arr);

////////////////////////////////

