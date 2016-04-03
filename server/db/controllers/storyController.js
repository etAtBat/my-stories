var db = require('../database.js');

module.exports = {

  getMostRecentStory: function (res, id) {
    db.query('select * from stories where story_owner=' + id + ' order by story_created_at desc limit 1', function (err, story) {
      if (err) {
        throw(err);
      } else {
        
        res.send(story);
      }
    })
  },

  getAllStories: function (res, id) {
    db.query('select story_name from stories where story_owner =' + id + ';', function (err, stories) {
      if (err) {
        throw(err);
      } else {

        res.send(stories);
      }
    })
  },

  saveUser: function (res, name) {
    var query = 'insert into names (name) values (' + name + ')';
    db.query(query, function (err, response) {
      if (err) {
        throw(err);
      } else {

        res.send(response);
      }
    })
  },

  saveStory: function(res, storyName, storyOwner, storyCreatedAt) {
    var query = 'insert into stories (story_name, story_owner, story_created_at) values ("' + storyName + '", ' + storyOwner + ', "' + storyCreatedAt + '");';
    console.log(query);
    db.query(query, function (err, response) {
      if (err) {
        throw(err);
      } else {

        res.send(response);
      }
    });
  },

  saveComments: function (res, id, comments) {
    var query = 'insert into comments (comment_text, comment_coordinates, comment_time, comment_story) values ';
    //comments is an array of comments, and the query string to insert them into the database must be built
    for (var i = 0; i < comments.length; i++) {
      var comment = comments[i];
      var queryPartial = '("' + comment.text + '", "' + comment.coordinates + '", "' + comment.time + '", ' + comment.comment_story + ')';
      i < comments.length - 1 ? queryPartial += ',' : queryPartial += ';';
      query += queryPartial;
    }
    
    console.log(query);
    db.query(query, function (err, response) {
      if (err) {
        throw(err);
      } else {

        res.send(response);
      }
    })
  },

  getStoryComments: function (res, id) {
    db.query('select * from comments where comment_story = ' + id + ';', function (err, comments) {
      if (err) {
        throw(err);
      } else {

        res.send(comments);
      }
    });
  }

};