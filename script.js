let screen = document.querySelector('h2')

// 1

let btns = document.querySelectorAll('button')

// let arr = [up, down, rnd, reset]

// btns.forEach(i => {
//     i.onclick = () => {
//         console.log(btns[0].classList);
//         if (btns[0].value) {

//             screen.innerHTML++

//         } else if (btns[1]) {

//             screen.innerHTML !=  0 ? screen.innerHTML-- : screen = screen

//         } else if (btns[2]) {

//             screen.innerHTML = Math.floor(Math.random() * 100)

//         } else if (btns[3]) {

//             screen.innerHTML = 0

//         } else {}
//     }
// })

// 2

let up = document.querySelector('.up')
let down = document.querySelector('.down')
let rnd = document.querySelector('.rnd')
let reset = document.querySelector('.reset')


up.onclick = () => {
    screen.innerHTML != 99 ? screen.innerHTML++ : screen.innerHTML = 0
}

down.onclick = () => {
    screen.innerHTML !=  0 ? screen.innerHTML-- : screen = screen
}

rnd.onclick = () => {
    screen.innerHTML = Math.floor(Math.random() * 100)
}

reset.onclick = () => {
    screen.innerHTML = 0
}
