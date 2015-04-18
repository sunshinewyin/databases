var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query("SELECT * FROM messages", function(err, result) {
        callback(result);
        if(err) throw err;
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      //insert a message into the database
      db.dbConnection.query("INSERT INTO messages (USERNAME, MSGTEXT, ROOMNAME) VALUES (?,?,?)",
        [body.username, body.message, body.roomname],
        function(err, result) {
          callback(result);
          if(err) throw err;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      //get all users from the database
    },
    post: function () {
      //set users in database
    }
  }
};

