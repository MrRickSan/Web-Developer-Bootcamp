/* global $ */

// same as document.querySelector('h1').style.color = 'yellow'
$('h1').css('color', 'yellow')

var styles = {
  color: 'red',
  background: 'pink',
  border: '2px solid purple'
}
$('h1').css(styles)

// this changes all 'lis' to blue without use a for loop
$('li').css('color', 'blue')

$('a').css('font-size', '40px')

$('li').css({
  fontSize: '10px',
  border: '3px dashed purple',
  background: 'rgba(89, 45, 20, 0.5)'
})
