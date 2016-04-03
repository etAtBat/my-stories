var express = require('express');
var path = require('path');
var router = require('./routes/router.js');
var db = require('./db/database.js');

var app = express();

//middleware
app.use(express.static(path.join(__dirname, '../public/')));

router.routes(app);

var port = 3000;

app.listen(port);
console.log('listening on port ' + port);