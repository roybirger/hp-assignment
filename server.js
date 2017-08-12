var express = require('express');
var http = require("http");
var path = require('path');
var bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use('/build', express.static(path.join(__dirname, 'build')));

require('./server/api.js')(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


console.log('starting server on port 8090');

http.createServer(app).listen(8090);