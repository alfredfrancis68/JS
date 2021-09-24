const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")

switch (action) {
    case "rock":
        board.innerHTML = "Rock crushes scissors"
    case "paper":
        board.innerHTML = "Paper traps Rock"
    case "scissor":
        board.innerHTML = "Scissor cuts paper"
    default:
        board.innerHTML = "Click something"
}


rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)



// const handler = (e) => {
//     const action = e.target.id
//     if (action === 'rock') {
//         board.innerHTML = "Rock crushes scissor"
//     } else if (action === 'paper') {
//         board.innerHTML = "Paper traps rock"
//     } else if (action === 'scissor') {
//         board.innerHTML = "Scissor cuts paper"
//     } else {
//         board.innerHTML = "Click something"
//     }
// }

// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)


// const handler = (event) => {
//     const action = event.target.id
//     if (action === 'rock') {
//         console.log("Rock crushes scissor")
//     } else if (action == 'paper') {
//         console.log("Paper traps rock")
//     } else if (action === 'scissor') {
//         console.log("Scissor cuts paper")
//     } else {
//         console.log("Click something")
//     }
// }

// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)



// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')


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