// Require Node's built-in Modules
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user');

// GET the login page
// http://localhost:3000/users/login
router.get('/login', controllers.renderLogin);

// POST login info
router.post('/login', controllers.login);

// GET request for logout and redirect
router.get('/logout', controllers.logout);

// GET the registration page
// http://localhost:3000/users/register
router.get('/register', controllers.renderRegister);

// POST the registration info
router.post('/register', controllers.register);

// GET the user settings page
// http://localhost:3000/users/settings
router.get('/settings/:id', controllers.renderSettings);

// PUT the update into current profile by id
router.put("/settings/:id", controllers.update)

// Delete the current profile by id
router.delete("/settings/:id", controllers.delete)

module.exports = router;