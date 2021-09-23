// const element = document.getElementById('selectme');//ID SELECTOR


// const element = document.getElementsByClassName('Heading'); //CLASSNAME SELECTOR
// console.log(element);
// console.log(typeof element);


// const element = document.getElementsByTagName('h2'); //TAGNAME SELECTOR
// console.log(element);



const element1 = document.querySelector('.heading');
// const element1 = document.querySelector('#selectme'); //QUERYSELECTOR
element1.innerHTML = "This is from JS"
console.log(element1);
console.log(typeof element1);
console.log(element1);
console.log(typeof element1);


const element2 = document.querySelector('#selectme')
element2.innerHTML = "I'm Alfred Francis. Son of Francis Pidiyath Poulose";
element2.style.color = "cyan";
element2.style.backgroundcolor = "dodgerblue";
element2.style.fontSize = "40px";
element2.style = 'display:none';
console.log(element2);
console.log(typeof element2);




const element3 = document.querySelector('#selectme')
console.log(element3.classList)
element3.classList.add('five') //adds a class 
console.log(element3.classList)
element3.classList.remove('one')
console.log(element3.classList)



const element4 = document.querySelector('#selectme')
    // const body = document.querySelector('body')

// console.log(body.classList.toggle('dark')); //Toggle method.
const value = element4.classList.contains('six')
console.log(value)