const button = document.querySelector('button')
const element = document.querySelector('#selectme')
    // console.log(button, element);
    // console.log(typeof button);
    // button.innerHTML = "Do not click me"

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })

button.addEventListener('click', () => {
    console.log('ThankYou for clicking me') //DOM API and JS is used to create a life in this button via the button.
})

button.addEventListener('dblclick', () => {
    console.log('ThankYou for double clicking me') //DOM API and JS is used to create a life in this button via the button.
})


button.addEventListener('click', () => {
    element.style = "background:aqua"
})

button.addEventListener('dblclick', () => {
    element.style = "color:white"
})