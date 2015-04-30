var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var savedData = [];

app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());



app.get('/api/todos', function (req, res) {
	setTimeout(function () {
		res.json(savedData);
	}, 1500);
});

app.post('/api/todos', function (req, res) {
	var data;
  console.log(req.body,res);
	try {
		data = req.body;
		if (!req.body || !Array.isArray(data)) {
			throw new Error('Wrong data format!');
		}
		if (data.length == 0) {
			throw new Error('Passed array is empty');
		}
		savedData = data;
		setTimeout(function () {
			res.json({
				msg: 'Saved ' + data.length + ' elements'
			});
		}, 1500);
	} catch (e) {
		res.status(400).json({
			msg: e.message
		});
	}

});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
