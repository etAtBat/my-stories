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
    db.query('select * from stories where story_owner =' + id + ';', function (err, stories) {
      if (err) {
        throw(err);
      } else {

        res.send(stories);
      }
    })
  }

}