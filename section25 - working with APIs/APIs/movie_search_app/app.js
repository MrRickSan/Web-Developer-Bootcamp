/*
General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb

&apikey=thewdb
*/

const express = require('express')
const request = require('request')
const app = express()
var url = 'http://www.omdbapi.com/?s='
var apikey = '&apikey=thewdb'

app.set('view engine', 'ejs')

app.get('/results', function (req, res) {
  var query = req.query.search
  request(`${url + query + apikey}`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(body)
      res.render('results', { data: data }) // results.Search[0].Title
    }
  })
})

app.get('/', function (req, res) {
  res.render('search')
})

app.listen(3000, function () {
  console.log('Movie app server has started!!')
})
