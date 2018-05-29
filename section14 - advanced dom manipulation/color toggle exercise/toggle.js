var button = document.querySelector('#button')
// var isPurple = false

button.addEventListener('click', changeColor)

// function changeColor () {
//   if (isPurple) {
//     document.body.style.background = 'white'
//   } else {
//     document.body.style.background = 'purple'
//   }
//   isPurple = !isPurple
// }


// best way to do:
function changeColor () {
  document.body.classList.toggle('purple')
}
