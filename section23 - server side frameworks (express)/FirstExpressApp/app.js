const express = require('express')
var app = express()

// '/' 'Hi There!'
app.get('/', function (req, res) {
  res.send('Hi There!')
})
// '/bye' 'Goodbye!'
app.get('/bye', function (req, res) {
  res.send('Goodbye')
})
// '/dog' 'MEOW!'
app.get('/dog', function (req, res) {
  console.log('SOMEONE MADE A REQUEST TO /DOG!!!')
  res.send('MEOW!!!')
})

// variables
app.get('/r/:subredditName', function (req, res) {
  var subreddit = req.params.subredditName
  res.send(`WELCOME TO THE ${subreddit.toUpperCase()} SUBREDDIT!`)
})

app.get('*', function (req, res) {
  res.send('You are a STAR!')
})

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
  console.log('Server has started!')
})
