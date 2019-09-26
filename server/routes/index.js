// Require Node's built-in Modules
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index');

// GET home page
// http://localhost:3000/
router.get('/', controllers.renderIndex);

module.exports = router;