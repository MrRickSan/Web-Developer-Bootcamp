// syntaxe
element.addEventListener(type, functionToCall)

// Exemple
// <button>Click me!</button>
// <p>No one has clicked me yet</p>
var button = document.querySelector('button')
var paragraph = document.querySelector('p')

button.addEventListener(click, function () {
  paragraph.textContent = 'SOMEONE CLICKED THE BUTTON'
})
