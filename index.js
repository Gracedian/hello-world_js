var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('{"success ":true", "data": "index", "message": "Hello World", "code": 200}');
});

app.listen(process.env.PORT || 4000, function() {
    console.log('Your node js server is running');
});