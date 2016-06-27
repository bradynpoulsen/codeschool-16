var express = require('express')
var morgan = require('morgan')
var skipper = require('skipper')

var TodoController = require('./todo/controller')

var app = express()

app.use(morgan('dev'))
app.use(skipper())

app.all('/', function (req, res)
{
	res.end('You have made it to day 2!')
})


app.get('/todos', TodoController.index)
app.post('/todos', TodoController.create)

app.get('/todos/:id', TodoController.show)
app.put('/todos/:id', TodoController.update)
app.delete('/todos/:id', TodoController.delete)


app.listen(8062, function ()
{
	console.log('Listening on localhost:8062')
})
