var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(result){
        res.writeHead(200);
        res.end(JSON.stringify(result));
      });
    },
    post: function (req, res) {
      var body = req.body; //express automatically parses JSON stringified object
      models.messages.post(body, function(result){
        res.writeHead(201);
        res.end(JSON.stringify(result));
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.writeHead(200);
      res.end();
    },
    post: function (req, res) {
      res.writeHead(201);
      res.end();
    }

  }
};

