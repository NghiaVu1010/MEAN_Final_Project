// Require Node's built-in Modules
var express = require('express');
var adminRouter = express.Router();
const controllers = require('../controllers/admin');

// GET admin page
// http://localhost:3000/admin
adminRouter.get('/', controllers.renderAdmin);

// GET admin page
// http://localhost:3000/admin
adminRouter.get('/data', controllers.getData);

module.exports = adminRouter;