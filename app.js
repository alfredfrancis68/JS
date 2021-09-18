// console.log("MERGED CLASS 1 ES6");

// var arr = [1, 2, 3, 4];
// console.log(arr[2]);

// var [one, two, three, four, five] = arr; //ES6 Destructuring
// console.log(three);
// console.log(four);
// console.log(five);

// function getscores() {
//     return [90, 100];
// }

// let [x, y, z] = getscores();
// console.log(x);
// console.log(y);
// console.log(z);

// const obj = {
//     fullname: "Nikhil Agarwal",
//     email: "nikhilagarwaliitkgp@gmail.com",
//     age: 20,
// };

// console.log(obj.email);

// let { dum, age, email, fullname } = obj;
// console.log(fullname);
// console.log(dum);

// let person = {
//     firstname: "Nikhil",
//     lastname: "Agarwal",
//     age1: 20,
//     middlename: "DNA",
// };
// let { age1, firstname, lastname, middlename = "" } = person;
// console.log(age1);
// console.log(firstname);
// console.log(lastname);
// console.log(middlename);



// function add(x, y) {
//     return x+y;
// }
// console.log(add(10, 20));

// let add = function(x,y) {
//     return x+y;
// }
// console.log(add(10,20))

// let add = (x, y) => {
//     return x + y;
// };
// console.log(add(10, 20));


// const counter = {
//     count: 1,
//     nikhil: function() {
//         return ++(this.count);
//     },
//     key: this,
//     agarwal: () => {
//         return --(this.count);
//     }
// }
// console.log(counter);
// console.log(counter.agarwal());
// console.log(counter.nikhil());
// console.log(counter.nikhil());
// console.log(counter.nikhil());
// console.log(counter);




// console.log("MERGED CLASS 2 ES6");

// let ranks = [1, 2, 3, 4, 5, 6];

// console.log(
//     ranks.map((e, index) => {
//         return e * 100;
//     })
// );



// console.log(
//     ranks.forEach((e, index) => {
//         return e * 100;
//     })
// );



// let newmaparr = ranks.map((e, index) => {
//     console.log(e)
//     if (e % 2 === 0)
//         return e
// })
// console.log(newmaparr);



// let newfilterarr = ranks.filter((e, index) => {
//     console.log(e)
//     if (e % 2 === 0)
//         return e
// })
// console.log(newfilterarr);



//  PROMISE.

let concert = true;

let attendConcert = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        } else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});

console.log(attendConcert)
console.log(attendConcert)