/* global $ */

$('h1').click(function () {
  // alert('message')
  console.log('h1 clicked')
})

$('button').click(function () {
  alert('button clicked')
})

$('button').click(function () {
  var text = $(this).text()
  console.log(`You clicked ${text}`)
})

$('input').keypress(function (event) {
  // check if the user hit [eneter] key
  if (event.which === 13) {
    alert('you hit enter')
  }
  console.log('You pressed a key!')
})


$('h1').on('click', function () {
  $(this).css('color', 'purple') // by using 'this' will change the color only of the h1 that was clicked
})

$('input').on('keypress', function (event) {
  console.log(`Key pressed: ${event.which}`)
})

$('button').on('mouseenter', function () {
  $(this).css('font-weight', 'bold')
})

$('button').on('mouseleave', function () {
  $(this).css('font-weight', 'normal')
})
