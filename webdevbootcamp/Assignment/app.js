const express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hi there, welcome to my assignment!')
})

app.get('/speak/:animal', function (req, res) {
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'Meow!',
    owl: 'Croo'
  }
  res.send(`The ${req.params.animal} says '${sounds[req.params.animal.toLowerCase()]}'`)
})

app.get('/repeat/:message/:times', function (req, res) {
  var message = req.params.message
  for (var i = 1; i < Number(req.params.times); i++) {
    message += ` ${req.params.message}`
  }
  res.send(message)
})

app.get('*', function (req, res) {
  res.send('Sorry, page not found... What are you doing with your life?')
})

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
  console.log('Server has started!')
})
