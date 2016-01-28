/// <reference path="_reference.ts" />

/*
import http = require('http');

var port:number = process.env.port || 3000;

var server = http.createServer(
    function(req:http.ServerRequest, res:http.ServerResponse){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello Node");
});

server.listen(port, function(){
    console.log("Server Started.. Listening on port: " + port);
});*/

import express = require('express');

var app:express.Express = express();

var port:number = process.env.port || 3000;

// Main route
app.get('/', 
    function (req:express.Request, res:express.Response, next:any) {
    res.send('Hello World!');
});

// info route
app.get('/info', 
    function (req:express.Request, res:express.Response) {
    res.send('Info Page');
});

app.listen(port, function () {
  console.log('Example app listening on port', + port);
});