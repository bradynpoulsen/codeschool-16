var mongoose = require('mongoose')

var TodoSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
	createdAt: Date,
	updatedAt: Date
})

module.exports = mongoose.model('Todo', TodoSchema)

// var todo = {
// 	title: title,
// 	description: description,
// 	completed: completed,

// 	id: id,
// 	createdAt: createdAt,
// 	updatedAt: updatedAt
// }

// module.exports = {
// 	createTodo: createTodo,
// 	deleteTodo: deleteTodoItem,
// 	getAll: getAllItems,
// 	getById: getItemById,
// 	saveTodo: saveTodo
// }
