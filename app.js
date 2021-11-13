console.log(" MERGED CLASS 2 ES6 ");


// PROMISE OBJECT
// DIFFERENT STAGES ARE:-

// PENDING
// RESOLVE
// REJECT  

// let concert = true;
// let attendConcert1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         } else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 4000);
// });

// console.log(attendConcert1);



let concert1 = false;

let attendConcert1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (concert1) {
            resolve("BOB ATTENDED THE CONCERT."); //THEN is for both the RESOLVE and REJECT FUNCTION.
        } else {
            reject("BOB FAILED TO ATTEND THE CONCERT."); //CATCH is ONLY for REJECT FUNCTION.

        }
    }, 2000);
});
// console.log(attendConcert1);
console.log("HI, I WON'T WAIT FOR ANYONE."); //Asynchronous way.
console.log("HI ALL, HOWDY."); //Asynchronous way.
console.log(attendConcert1);

// attendConcert1.then((data) => console.log(data));
// attendConcert1.catch((error) => console.log(error));

attendConcert1.then((data) => console.log(data));
attendConcert1.catch((error) => console.log(error));
attendConcert1.then((data) => console.log(data)).catch((error) => console.log(error));
