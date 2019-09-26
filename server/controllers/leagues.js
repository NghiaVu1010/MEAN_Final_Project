// Controller for leagues
var fs = require('fs');

var LeaguesController = {};

// GET: Returns the leagues JSON file data
LeaguesController.getLeagues = (req, res) => {
    try {
        res.end(fs.readFileSync("./data/leagues.json"));
    }
    catch(err) {
        res.end("Error reading file --" + err);
    }
};

module.exports = LeaguesController;