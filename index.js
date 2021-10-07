console.log(" MERGED CLASS 2 ES6 ");

let rank = [1, 2, 3, 4, 5];
const newArr = rank.forEach((e) => console.log(e + 5)); //forEach
console.log(newArr);

const newArr1 = rank.map((e) => e + 5); //map
console.log(newArr1)
console.log(rank.map((e) => e + 4)); //No need of return statement at all when there is no curly braces

console.log(rank.map((e) => { return (e + 2) })); //But reurn sattement should be provided if there is curly braces [AND THAT'S A RULE]

console.log(rank.map((e, index) => { return (index) }));
// let ranks = [1, 2, 3];
// const newArr = ranks.map((e) => console.log(e + 1));
// console.log(newArr)