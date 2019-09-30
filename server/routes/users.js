// Require Node's built-in Modules
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user');

// GET the data
// http://localhost:3000/users/data
router.get('/data', controllers.getData);

// GET the data by id
// http://localhost:3000/users/data/:id
router.get('/data/:id', controllers.getDataById);

// POST login info
// http://localhost:3000/users/login
router.post('/login', controllers.login);

// POST the registration info
// http://localhost:3000/users/register
router.post('/register', controllers.register);

// PUT the update into current profile by id
// http://localhost:3000/users/settings/:id
router.put("/settings/:id", controllers.update)

// Delete the current profile by id
// http://localhost:3000/users/settings/:id
router.delete("/settings/:id", controllers.delete)

module.exports = router;