console.log(" MERGED CLASS 2 ES6 ");

let rank = [1, 2, 3, 4, 5];
const newArr = rank.forEach((e) => console.log(e + 5)); //forEach
console.log(newArr);

const newArr1 = rank.map((e) => e + 5); //map
console.log(newArr1)
console.log(rank.map((e) => e + 4)); //No need of return statement at all when there is no curly braces

console.log(rank.map((e) => { return (e + 2) })); //But return sattement should be provided if there is curly braces [AND THAT'S A RULE]

console.log(rank.map((e, index) => { return (e * 100) }));
console.log(rank.forEach((e, index) => { return (e * 100) }));

console.log(rank.map((e) => {
    return e * 100000;
}));


let ranks = [12, 34, 44, 56, 7, 8, 56];
let newArr2 = ranks.map((e, index) => {

    if (e % 2 === 0)
        console.log(e);
})
console.log(newArr2);


// let ranks = [1, 2, 3];
// const newArr = ranks.map((e) => console.log(e + 1));
// console.log(newArr)



// FILTER ARRAY METHOD RETURNS THE WHOLE ARRAY
let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    console.log(index)
    if (e % 2 == 0)
        return e
})
console.log(newfilterarr)