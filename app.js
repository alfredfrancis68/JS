const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')


// const handler = (event) => {
//     const action = event.target.id
//     if (action === 'rock') {
//         console.log("Rock crushes scissors")
//     } else if (action === 'paper') {
//         console.log("Paper traps Rock")
//     } else if (action === 'scissor') {
//         console.log("Scissor cuts paper")
//     } else {
//         console.log("Click something")
//     }
// }


// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)

const handler = (event) => {
    console.log(event)
}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)


const handler = (action) => {
    console.log("You clicked " + action)
}


rock.addEventListener('click', () => {
    handler('rock')
})
paper.addEventListener('click', () => {
    handler('paper')
})
scissor.addEventListener('click', function() {
    handler('scissor')
})



rock.addEventListener('click', (action) => {
        console.log("You clicked" + 'rock')
    })
    // handler('rock')

paper.addEventListener('click', handler('paper'))
scissor.addEventListener('click', handler('scissor'))

function logName(name) {
    console.log(name)
}
logName("Alfred Francis")



function logName(Name = "Alfred Francis", age = 21) {
    console.log(Name + ", you are " + age + " years old my boy")
}
logName()



const add1 = function(a = 0, b = 0) {
    return a + b
}
console.log(add1(125, 250))



console.log(add(12, 34))

function logName(a = 0, b = 0) {
    return a + b;
}