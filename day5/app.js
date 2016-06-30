var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var passport = require('passport')
var skipper = require('skipper')

// Configure Mongoose

mongoose.connect('mongodb://mongodb.cs.dixie.edu/SudoBashBash')

// Configure Express

var app = express()

app.use(morgan('dev'))
app.use(passport.initialize())
app.use(skipper())

app.use('/todos', require('./todo/routes'))

app.all('/', function (req, res)
{
	res.end('You have made it to day 2!')
})

app.listen(8062, function ()
{
	console.log('Listening on localhost:8062')
})
