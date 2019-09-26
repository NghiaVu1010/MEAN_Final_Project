// require new custom Service Module
var userService = require('../services/userService');

var UserController = {};

// GET: Renders login at http://localhost:3000/users/login
UserController.renderLogin = (req, res) => {
    res.render('login', { sheet: 'login' });
};

// POST: Collects login information to be passed
UserController.login = (req, res) => {
    userService.login({
            username: req.body.username,
            password: req.body.password
        })
        .then((users) => {
            if (users) {
                // Stores username/is_admin in session for traversing
                req.session.username = users.username;
                req.session.is_admin = users.is_admin;
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Login Users error: ${err}`);
            res.end('Login Users error.');
        });
};

// GET: Logout user and redirect to homepage
UserController.logout = (req, res) => {
    // Invalidate username in session - until next login
    req.session.username = null;
    req.session.is_admin = null;
    res.redirect('/');
};

// GET: Renders registration at http://localhost:3000/users/register
UserController.renderRegister = (req, res) => {
    res.render('register', { sheet: 'register' });
};

// POST: Collects registration info to be passed
UserController.register = (req, res) => {
    userService.register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

// GET: Renders settings at http://localhost:3000/users/settings/:id
UserController.renderSettings = (req, res) => {
    res.render('settings', { sheet: 'settings' });
};

// PUT: Collects updated settings to be passed
UserController.update = (req, res) => {
    userService.update({id: req.params.id, email: req.body.email})
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// DELETE: Passes the ID of the profile to delete
UserController.delete = (req, res) => {
    userService.delete(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

module.exports = UserController;