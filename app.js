const button = document.querySelector('button')
const element = document.querySelector('#selectme')
    // console.log(button, element);
    // console.log(typeof button);
    // button.innerHTML = "Do not click me"

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })

button.addEventListener('click', () => {
        element.classList.toggle('aqua')
    })
    //DOM API and JS is used to create a life in this button via the button.



button.addEventListener('click', () => {
        //element.classList.toggle('aqua)
        if (button.classList.contains('aqua')) {
            button.classList.remove('aqua')
        } else {
            button.classList.add('aqua')
        }
    })
    //DOM API and JS is used to create a life in this button via the button.