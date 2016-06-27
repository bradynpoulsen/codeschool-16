var express = require('express');

var app = express();

app.get('/english', function (req, res)
{
	res.end("Hello, World!");
});

app.get('/espanol', function (req, res)
{
	res.end("¡Hola Mundo!");
});

app.get('/deutsch', function (req, res)
{
	res.end("Hello, from Doytcheland!");
});


///////////////////////////////
// Using Regular Expressions //
///////////////////////////////

// app.get(/^\/(espanol|spanish)/, function (req, res)
// {
// 	res.end("¡Hola Mundo!");
// });

////////////////////
// Using Function //
////////////////////

// var saySpanish = function (req, res)
// {
// 	res.end("¡Hola Mundo!");
// };
// app.get('/espanol', saySpanish);
// app.get('/spanish', saySpanish);


/////////////////////
// Using Redirects //
/////////////////////

// app.get('/spanish', function (req, res)
// {
// 	res.end("¡Hola Mundo!");
// });

// app.get('/espanol', function (req, res)
// {
// 	res.redirect('/spanish');
// });
app.listen(8000);

console.log("Our server has started on port 8000");
