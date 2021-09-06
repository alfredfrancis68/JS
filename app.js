const rock = document.querySelector('#rock')
console.log(rock)

const rock = document.querySelector('#paper')
console.log(paper)

const rock = document.querySelector('#scissor')
console.log(scissor)





// const handler = (action) => {
//     console.log("You clicked" + action)
// }
// handler('rock')
//     // rock.addEventListener('click', handler('rock'))
//     // rock.addEventListener('click', handler('rock'))
//     // paper.addEventListener('click', handler('paper'))
//     // scissor.addEventListener('click', handler('scissor'))





// const handler = (action) => {
//         console.log("You clicked" + action)
//     }
//     // handler('rock')
// rock.addEventListener('click', handler('rock'))
//     // paper.addEventListener('click', handler('paper'))
//     // scissor.addEventListener('click', handler('scissor'))






// const handler = (action) => {
//     console.log("You clicked" + action)
// }

// rock.addEventListener('click', () => {
//             handler('rock')
//         }



// const handler = (action) => {
//     console.log(action)
// }

// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)




// const handler = (event) => {
//     console.log(event.target)
//     const action = event.id
//     if (action == 'rock') {
//         console.log("Rock crushes Scissor")
//     } else if (action == 'paper') {
//         consolelog("Paper traps Rock")
//     } else if (action == 'scissor') {
//         consolelog("Scissor cuts paper")
//     } else {
//         consolelog("Click on something")
//     }
// }

// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)





// const board = document.querySelector("#board")
// const handler = (e) => {
//     const action = e.target.id
//     if (action === 'rock') {
//         board.innerHTML = "Rock crushes scissors"
//     } else if (action === 'paper') {
//         board.innerHTML = "Paper traps Rock"
//     } else if (action === 'scissor') {
//         board.innerHTML = "Scissor cuts paper"
//     } else {
//         board.innerHTML = "Click something"
//     }
// }



// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)





const board = document.querySelector("#board")
const handler = (e) => {
    const action = e.target.id
    if (action === 'rock') {
        board.innerHTML = "Rock crushes scissors"
    } else if (action === 'paper') {
        board.innerHTML = "Paper traps Rock"
    } else if (action === 'scissor') {
        board.innerHTML = "Scissor cuts paper"
    } else {
        board.innerHTML = "Click something"
    }
}



rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)