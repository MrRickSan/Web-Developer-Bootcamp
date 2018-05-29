var p1Button = document.querySelector('#p1')
var p2Button = document.getElementById('p2')
var p1Display = document.querySelector('#p1Display')
var p2Display = document.querySelector('#p2Display')
var resetBtn = document.querySelector('#reset')
var inputNum = document.querySelector('input[type="number"]')
var winScoreDisplay = document.querySelector('p span')

var p1Score = 0
var p2Score = 0
var winScore = 5
var gameOver = false

p1Button.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++
    p1Display.textContent = p1Score
    if (p1Score === winScore) {
      p1Display.classList.add('winner')
      gameOver = true
    }
  }
})

p2Button.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++
    p2Display.textContent = p2Score
    if (p2Score === winScore) {
      p2Display.classList.add('winner')
      gameOver = true
    }
  }
})

resetBtn.addEventListener('click', reset)

inputNum.addEventListener('change', function () {
  winScoreDisplay.textContent = this.value
  winScore = Number(this.value)
  reset()
})

function reset () {
  p1Display.textContent = 0
  p2Display.textContent = 0
  p1Display.classList.remove('winner')
  p2Display.classList.remove('winner')
  p1Score = 0
  p2Score = 0
  gameOver = false
}
