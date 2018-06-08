const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/fallinlovewith/:thing', function (req, res) {
  var thing = req.params.thing
  res.render('love', {thingVar: thing})
})

app.get('/posts', function (req, res) {
  var posts = [
    {title: 'Post 1', author: 'Susy'},
    {title: 'My adorable pet bunny', author: 'Charlie'},
    {title: 'Can you belive this pomsky?', author: 'Colt'}
  ]

  res.render('posts', {posts: posts})
})

app.get('*', function (req, res) {
  res.send('Not allowed')
})

app.listen(3000, function () {
  console.log('Server started listening on http://localhost:3000')
})
