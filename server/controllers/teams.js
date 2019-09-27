// Controller for teams
var fs = require('fs');

var TeamsController = {};

function getMatchingTeamsByLeague(leagueCode, data) {
    let matches = data.filter( t => t.League == leagueCode );
    return matches;
}

// GET: Returns the teams JSON file data
TeamsController.getTeams = (req, res) => {
    try {
        res.end(fs.readFileSync("./data/teams.json"));
    }
    catch(err) {
        res.end("[]");
    }
};

// GET: Returns the teams by league from JSON file data - WIP
TeamsController.getTeamsByLeague = (req, res) => {
    try {
        data = JSON.parse(fs.readFileSync("./data/teams.json"));
    }
    catch(err) {
        res.end("Error reading file --" + err);
    }

    let matches = getMatchingTeamsByLeague(req.params.id, data);
    res.end(JSON.stringify(matches));
};

module.exports = TeamsController;