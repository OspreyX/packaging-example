/* jshint node: true*/
'use strict';
var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './')));

//Start the server:
var port = 8000;
var server = http.createServer(app).listen(port, function() {
    console.log('express server listening on port ' + port);
});