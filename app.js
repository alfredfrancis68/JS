// const element = document.getElementById('selectme');//ID SELECTOR


// const element = document.getElementsByClassName('Heading'); //CLASSNAME SELECTOR
// console.log(element);
// console.log(typeof element);


// const element = document.getElementsByTagName('h2'); //TAGNAME SELECTOR
// console.log(element);



const element = document.querySelector('.heading');
const element1 = document.querySelector('#selectme'); //QUERYSELECTOR
element.innerHTML = "This is from JS"
console.log(element);
console.log(typeof element);
console.log(element1);
console.log(typeof element1);