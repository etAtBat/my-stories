var storyController = require('../db/controllers/storyController.js');

exports.routes = function (app) {

  app.get('/', function (req, res) {
    
    res.render('index.html');
  });

  app.get('/story', function (req, res) {

    //userId will come from the parameters passed in
    var userId = 3;

    storyController.getMostRecentStory(res, userId);
  });

  app.get('/stories', function (req, res) {

    //userId will come from the parameters passed in
    var userId = 3;

    storyController.getAllStories(res, userId);
  });

};
