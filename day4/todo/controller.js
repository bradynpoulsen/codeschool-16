var Todo = require('./model')

module.exports = {
	// CREATE
	create: createTodo,
	// READ
	index: indexTodo,
	show: showTodo,
	// UPDATE
	update: updateTodo,
	// DELETE
	delete: deleteTodo
}

function createTodo(req, res)
{
	Todo.create(
	{
		title: req.body.title,
		description: req.body.description,
		completed: req.body.completed
	},
	function (err, item) {
		if (err) return reportError(err, res)

		res.status(201).json(item)
	})
}

function deleteTodo(req, res)
{
	findTodo(req, res, function (item)
	{
		item.remove(function (err)
		{
			if (err)
			{
				reportError(err, res)
			}
			else
			{
				res.status(204).end()
			}
		})
	})
}

function indexTodo(req, res)
{
	var collection = Todo.getAll()
	res.json(collection)
}

function showTodo(req, res)
{
	var item = findTodo(req, res)

	if (item)
	{
		res.json(item)
	}
}

function updateTodo(req, res)
{
	var item = findTodo(req, res)

	if (item)
	{
		item.title = req.body.title
		item.description = req.body.description
		item.completed = req.body.completed

		Todo.saveTodo(item)
		res.json(item)
	}
}

/**
 * @param {function (item)} success
 */
function findTodo(req, res, success)
{
	var id = req.params.id
	Todo.findById(id, function (err, item)
	{
		if (err)
		{
			reportError(err, res)
		}
		else if (!item)
		{
			res.status(404).json({
				error: 'Could not find item with that id'
			})
		}
		else
		{
			success(item)
		}
	})
}

function reportError(err, res)
{
	res.status(500).json({
		error: err.toString()
	})
}






