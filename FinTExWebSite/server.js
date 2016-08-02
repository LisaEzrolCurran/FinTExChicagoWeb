var express = require('express');
var app = express();
var path = require('path');

app.use('/css', express.static(__dirname + '/css'));
app.use('/libs', express.static(__dirname + '/libs'));
app.use('/font-awesome', express.static(__dirname + '/font-awesome'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function () {
  console.log('Server listening on port 8080');
});
