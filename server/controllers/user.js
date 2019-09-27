// require new custom Service Module
var userService = require('../services/userService');

var UserController = {};

// GET: Gets the user data from list
UserController.getData = (req, res) => {
    userService.list()
        .then((users) => {
            if (users) {
                res.json(users);
            } 
            else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// GET: Gets the user data by id from list
UserController.getDataById = (req, res) => {
    userService.listById({id: req.params.id})
        .then((users) => {
            if (users) {
                res.json(users);
            } 
            else {
                res.end('No User found.');
            }
        })
        .catch((err) => {
            console.log(`Listing User error: ${err}`);
            res.end('Listing User error.');
        });
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
                res.json({"error": "No user found"});
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