// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');


function logName() {
    console.log("Alfred Francis")
}
logName()



function logName(name) {
    console.log(name)
}
logName("Alfred Francis")



function logName(Name = "Alfred Francis", age = 21) {
    console.log(Name + ", you are " + age + " years old my baby")
}
logName()




function add(a = 0, b = 0) {
    const sum = a + b
    return sum
        // console.log(a + b)
}
const result = add(125, 125);
console.log(result)





function add1(a = 100, b = 90) {
    return a + b
        // console.log(a + b)
}
const result1 = add1();
console.log(result1)




function sub(a = 100, b = 90) {
    return a - b
        // console.log(a + b)
}
const result2 = sub();
console.log(result2)