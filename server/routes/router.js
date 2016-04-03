var storyController = require('../db/controllers/storyController.js');

exports.routes = function (app) {

  app.get('/', function (req, res) {
    
    res.render('index.html');
  });

  //takes an id and returns information about the most recent story for that id
  app.get('/story', function (req, res) {

    //userId will come from the parameters passed in
    var userId = 3;

    storyController.getMostRecentStory(res, userId);
  });

  //given an id, this will return all of the story names associated with it
  app.get('/stories', function (req, res) {

    //userId will come from the parameters passed in
    var userId = 3;

    storyController.getAllStories(res, userId);
  });

  //will save a story to the database
  app.post('/story', function (req, res) {

    //these values will come from the parameters passed in
    //dummy data for now
    var storyName = 'egans big break';
    var storyOwner = 5;
    var storyCreatedAt = '2006-1-31 12:09:33';

    storyController.saveStory(res, storyName, storyOwner, storyCreatedAt);
  });

  //will save an array of comments to the database
  app.put('/story', function (req, res) {

    //these values will come from the parameters pased in
    //dummy data for now
    var comments = [
      {
        text: 'one tw three',
        coordinates: '50-50',
        time: '1963-01-01 06:34:12',
        comment_story: 3
      },
      {
        text: 'four five six',
        coordinates: '90-20',
        time: '1984-02-28 07:11:55',
        comment_story: 3
      }
    ];
    var storyId = 2;

    storyController.saveComments(res, storyId, comments);
  });

};
