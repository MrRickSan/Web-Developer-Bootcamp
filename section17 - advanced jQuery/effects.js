/* global $ */
$('button').on('click', function () {
  $('div').fadeOut(1000, function () {
    // $(this).remove() // wait until the fadeOut is finished then remove the div
  })
})

$('button').on('click', function () {
  $('div').fadeIn(1000, function () {
  })
})

$('button').on('click', function () {
  $('div').fadeToggle(500, function () {
  })
})

$('button').on('click', function () {
  $('div').slideDown()
})

$('button').on('click', function () {
  $('div').slideUp()
})

$('button').on('click', function () {
  $('div').slideToggle(1000, function () {
    console.log('Slide is done!')
    $(this).remove()
  })
})
