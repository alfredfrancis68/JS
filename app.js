const button = document.querySelector('button')
const element = document.querySelector('#selectme')
const body = document.querySelector('body')
    // console.log(button, element);
    // console.log(typeof button);
    // button.innerHTML = "Do not click me"

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })

button.addEventListener('click', () => {
        element.classList.toggle('dark')
    })
    //DOM API and JS is used to create a life in this button via the button.
button.addEventListener('click', () => {
        body.classList.toggle('dark')
    })
    //DOM API and JS is used to create a life in this button via the button.



button.addEventListener('click', () => {
        //element.classList.toggle('aqua)
        if (button.classList.contains('dark')) {
            button.classList.remove('dark')
        } else {
            button.classList.add('dark')
        }
    })
    //DOM API and JS is used to create a life in this button via the button.



button.addEventListener('click', () => {
    //element.classList.toggle('aqua)
    if (button.classList.contains('dark')) {
        button.classList.remove('dark'), button.classList.remove('body')
    } else {
        button.classList.add('dark'), button.classList.add('body')
    }

    //DOM API and JS is used to create a life in this button via the button.

    body.addEventListener('click', () => {
            //element.classList.toggle('aqua)
            if (body.classList.contains('body')) {
                body.classList.remove('body'), body.classList.remove('body')
            } else {
                body.classList.add('body'), body.classList.add('body')
            }
        })
        //DOM API and JS is used to create a life in this button via the button.   
})




console.log("THIS CODE IS PUSHED. SO , YOU CAN DELETE THIS CODE");