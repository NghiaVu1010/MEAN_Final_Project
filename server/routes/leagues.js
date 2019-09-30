// Require Node's built-in Modules
var express = require('express');
var leaguesRouter = express.Router();
const controllers = require('../controllers/leagues');

// GET leagues data
// http://localhost:3000/leagues/data
leaguesRouter.get('/data', controllers.getLeagues);

module.exports = leaguesRouter;