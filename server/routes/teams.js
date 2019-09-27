// Require Node's built-in Modules
var express = require('express');
var teamsRouter = express.Router();
const controllers = require('../controllers/teams');

// GET all teams data
// http://localhost:3000/teams/data
teamsRouter.get('/data', controllers.getTeams);

// GET all teams by divisions
// http://localhost:3000/teams/data/byleague/:id
teamsRouter.get('/data/byleague/:id', controllers.getTeamsByLeague);

module.exports = teamsRouter;