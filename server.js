var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile = '';

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data){
		if (err) throw err;
		stringifyFile = data
		res.send(data);
		
	});
});
app.post('/updateNote/:note', function(req, res){
	console.log("Loading post...")
	fs.writeFile('./test.json', stringifyFile + req.params.note, function(err){
		if(err) throw err;
		res.send('file updated');
	});
});

app.listen(3000);