// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


var friends = require("../app/data/friends.js")



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (survey) {

  survey.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  survey.post("/api/friends", function (req, res) {
    
      var userInput = req.body;
      var userResponses = userInput.scores;

      var matchUser = '';
      var matchPic = '';
      var totaldiff = 10000

      for ( var t = 0 ; t < friends.length; t++) {
                var difference = 0;
                for ( var i = 0; i < userResponses.length; i++) {
                  difference +=Math.abs(friends[t].scores[i] - userResponses[i]);
                }

                if ( difference < totaldiff) {
                  totaldiff = diff;
                  matchUser = friends[t].name;
                  matchPic = firends[i].photo
                }
      }

      friends.push(userInput)
      res.json({status: 'OK', matchUser: matchUser,matchPic: matchPic})

  });



};
