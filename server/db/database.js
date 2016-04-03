var mysql = require('mysql');
var models = require('./models/models.js');

db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_paths',
  port: 3306
});

db.connect(function (err) {
  if (err) {
    console.log('error connecting to DB');
    return;
  }

  models.init(db);
  
});

module.exports = db;
