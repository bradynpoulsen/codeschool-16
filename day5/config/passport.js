var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var User = require('../user/model')

passport.use(new LocalStrategy(
	function (email, password, next)
	{
		User.findByEmail(email, function (err, user)
		{
			if (err) return next(err)
			if (!user) return next(null, false)
			if (!user.verifyPassword(password)) return next(null, false)
			return next(null, user)
		})
	}
))