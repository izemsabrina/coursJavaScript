// /**
//  * 
//  * @param {PointerEvent} event 
//  */

// function onButtonclick(event) {
//     event.preventDefault()
//     // console.log(event.currentTarget)
    
// }

// const button = document.querySelectorAll('button').forEach(button => {
// button.addEventListener('click',onButtonclick())
// })

document.querySelector('form').addEventListener('submit', (e) => {
    
    const form = e.currentTarget
    const data = new FormData(form)
    const firstname = data.get('firstname')
    if (firstname.length < 2) {
        e.preventDefault()

    } else {
        // form.submit()
    }
} )