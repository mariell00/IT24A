//data types
//integers
let a = 20;

//float
let b = 20.5;

//string
let c = "Hello, everyone!";

//boolean
let d = true;

console.log(typeof a); //number
console.log(typeof b); //number
console.log(typeof c); //string
console.log(typeof d); //boolean

//arithmetic

let x = 12;
let y = 12;

console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division

//logical operators

let z = true;
let h = false;

console.log(z && h); //logical AND
console.log(z || h); //logical OR
console.log( !z ); //logical NOT

//if else

let num = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num === 0){
    console.log("Zero");
}else{
    console.log("Negative number")
}

//switch
function get(day){
    let day =3;
    console.log(getNameday(day));
    switch (day){
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        default:
            return "Invalid Day";
            break;
    }
}

//loops

for (let i = 0; i <5; i++) {
    console.log(i);
}

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//odd or even

function isEven(num) {
    return % 2 === 0;
}
function isOdd(num) {
    return!isEven(num);
}
console.log(isEven(4)); //true
console.log(isOdd(5)); //true

//prime
function idPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for(let i =5; i * i <=num; i+= 6) {
        if (num % i === 0 || num % (i +2) === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); //true
console.log(isPrime(15)); //false

//palindrome

function isPalindrome(str) {
    let cleanedStr = str.cleaned(/[^a-zA-Z0-9]/g, '').toLowerCae();
    let reversedStr = cleanedStr.split ('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man a plan a canala panama"));  //true
console.log(isPalindrome("Hello")); //false