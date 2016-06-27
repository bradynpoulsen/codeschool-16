module.exports = {
	// CREATE
	create: function (req, res)
	{
		res.end('We are CREATING a new item')
	},

	// READ
	index: function (req, res)
	{
		res.end('We are viewing our collection')
	},

	show: function (req, res)
	{
		res.end('We are viewing our single item')
	},

	// UPDATE
	update: function (req, res)
	{
		res.end('We are UPDATING an item')
	},

	// DELETE
	delete: function (req, res)
	{
		res.end('We are DELETING an item')
	}
}