/* global $ */

// get all the text inside h1 tag
$('h1').text()

$('h1').text('jQuery Methods Demo Page - New Text added!!!') // changes the text inside h1 tag

$('ul').text()

$('li').text()

// gets the inner html of the element
$('h1').html()

$('ul').html('<li>Squittles</li><li>Starburst</li><li>Twix</li><li>I Hacked Your UL!</li><li>Rusty is still adorable!</li>')

$('img').css('width', '200px')
$('img:first-of-type').attr('src', 'https://picsum.photos/200/300')
$('img').last().attr('src', 'https://picsum.photos/200/300')

$('input').attr('type', 'text')
$('input').val() // get the value inside the input
$('input').val('Rusty Steele') // insert the value inside the input

$('select').val() // gets the current value inside the dropdown menu

$('h1').addClass('correct')
$('h1').removeClass('correct')

$('li:nth-child(3)').toggleClass('correct')
$('li').first().toggleClass('done')
