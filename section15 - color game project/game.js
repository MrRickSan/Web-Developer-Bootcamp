var numSquares = 6
var colors = []
var pickedColor
const squares = document.querySelectorAll('.square')
const colorDisplay = document.getElementById('colorDisplay')
const messageDisplay = document.querySelector('#message')
const h1 = document.querySelector('h1')
const resetBtn = document.querySelector('#reset')
const modeButtons = document.querySelectorAll('.mode')

init()

resetBtn.addEventListener('click', reset)

function init () {
  setupModeButtons()
  setupSquares()
  reset()
}

function setupSquares () {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener('click', function () {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        resetBtn.textContent = 'Play Again?'
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
      } else {
        this.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try Again'
      }
    })
  }
}

function setupModeButtons () {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      this.classList.add('selected')

      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6
      reset()
    })
  }
}

function reset () {
  resetBtn.textContent = 'New Colors'
  messageDisplay.textContent = ''
  // generate all new Colors
  colors = generateRandomColors(numSquares)
  // pick a new random color from array
  pickedColor = pickColor()
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
  // reset h1 background
  h1.style.backgroundColor = 'steelBlue'
}

function changeColors (color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

function pickColor () {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors (num) {
  // make an array
  var arr = []
  // add num random colors to array and return the array
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor())
  }
  return arr
}

function randomColor () {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}
