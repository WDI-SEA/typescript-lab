// designate type - can use 'any' (default) but discouraged
var num = 32;
console.log(num);
var font;
font = 23; // must be bold or italic or 23 as stated in Style type
var person = {
    first: 'Jeff',
    last: 'Delaney'
};
var person2 = {
    first: 'Usain',
    last: 'Bolt',
    other: 23
};
// functions
function pow(x, y) {
    return Math.pow(x, y);
}
console.log(pow(32, 12));
function stringTest(a, b) {
    return a + b;
}
console.log(stringTest('hello', 'world'));
var arr = [];
arr.push(1);
arr.push('23');
arr.push(false);
console.log(arr);
////////////////////////////////
