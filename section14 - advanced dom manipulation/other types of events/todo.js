var lis = document.querySelectorAll('li')

// firstLi.addEventListener('mouseover', function () {
//   this.style.color = 'pink'
// })
//
// firstLi.addEventListener('mouseout', function () {
//   this.style.color = 'black'
// })

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function () {
    this.classList.add('hover_color')
  })

  lis[i].addEventListener('mouseout', function () {
    this.classList.remove('hover_color')
  })

  lis[i].addEventListener('click', function () {
    this.classList.toggle('done')
  })
}
