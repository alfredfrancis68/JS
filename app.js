// console.log({ name: "ALfred Francis" });

// console.log(123456789);
// console.log(true);

// console.log(false);

// console.log(false, 234243, 'string', { name: "Alfred" });

// console.log(false, true, { name: "Alfred" }, "String");

// console.warn("This is warning.");

// console.error("This is an error.")

// console.log({
//     name: "Alfred Fra-----------ncis",
//     print: () => { 'Friends' }
// })




// var Name = "Bob" //Declaration of variable
// Name = "Christy"
// Name = "Ann"
// console.log(Name)



// let Name2 = "Aleena"; //Declaration of variable
// Name2 = "Austin";
// console.log(Name2);


// let age = 20;
// console.log(age);

// let Age = 20;
// console.log(typeof Age);
// console.log(Age);


// let Name3 = 'Alfred Francis'
// console.log(Name3);


// let arr = [12, 23, 34, 45, 45, 56, 7, 89]
// arr.push(1234);
// arr.unshift(false);
// console.log(arr);
// console.log(typeof arr);

// Primitive Data
let Name4 = "My Friends";
console.log(Name4)
console.log(typeof Name4);
let isTrue = true;
let isFalse = false;

// Non primitive datatypes

let arr5 = [1, 2, 3, 4, 5];
arr5.push("value");
arr5.push(false); //  shifts the provided value to the first position.
arr5.unshift(48357);
arr5.unshift(true); //  shifts the provided value to the first position.
console.log(arr5);
console.log(typeof arr5);

//

let Name6 = "Pappa";
let age6 = 55;
console.log(Name6.toUpperCase());
console.log(Name6.toLowerCase());
console.log(age6.toString);


const a = 2;
const b = '2';
console.log(a + "" + b);
console.log(a + " " + b);


const c = 2;
const d = 4;
console.log(c + d);


const e = 23;
const f = 34;
const g = 12;

console.log('a > b', a > b);
console.log('a < b', a < b);
console.log('a == b', a == b);
console.log('a==c', a == c);
console.log('a >= c', a > c);


// const h = 12;
// const i = '11';
// console.log(h === i)
// console.log(h == i)


const h = 12;
const i = '12';
console.log(h == i); //h==i
console.log(h === i); //h==i && number == string.



const j = 100;
const k = 200;
const l = 159;

console.log(l > j && l < k);

// ----------------------------------

const m = 0;
if (typeof a == 'number') {
    if (m % 2 == 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("Not a number")
}

// -----------------------------------

const n = 433;
if (typeof n == 'number') {
    if (n % 2 == 0) {
        console.log('Number is even');
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("Not a number");
}



const r = 0;
if (typeof r === 'number') {
    if (r === 0) {
        console.log("Number is zero");
    }
    if (r % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("Not a number");
}



const p = 0;
if (typeof p === 'number') {
    if (p === 0) {
        console.log("Number is zero");
    }
    if (p % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.error("Not a number");
}