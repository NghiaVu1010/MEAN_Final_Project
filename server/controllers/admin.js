// Controller for home page
var userService = require('../services/userService');

var AdminController = {};

// GET: Renders admin page at http://localhost:3000/admin
AdminController.renderAdmin = (req, res) => {
    if(req.session.is_admin == 1) {
        res.render('admin', { sheet: 'admin' });
    }
    else {
        res.redirect('/teams');
    }
};

// GET: Gets the user data from list
AdminController.getData = (req, res) => {
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

module.exports = AdminController;