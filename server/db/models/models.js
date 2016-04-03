exports.init = function(db) {

  //creating tables
  db.query("create table if not exists names(id int(10) unsigned NOT NULL auto_increment, name varchar(60) NOT NULL, primary key (id))engine = innodb;");
  db.query("create table if not exists comments(id int(10) unsigned NOT NULL auto_increment, comment_text varchar(250) NOT NULL, comment_coordinates varchar(50) NOT NULL, comment_time DATETIME NOT NULL, comment_story int(10) unsigned, primary key (id))engine = innodb;");
  db.query("create table if not exists stories(id int(10) unsigned NOT NULL, story_name varchar(60) NOT NULL, story_owner int(10) unsigned NOT NULL, story_created_at DATETIME NOT NULL, primary key (id))engine = innodb;");

};