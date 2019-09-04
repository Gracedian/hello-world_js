var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.listen(process.env.PORT || 4000, function() {
    console.log('Your node js server is running');
});