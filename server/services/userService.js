// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller
const User = require("../db/connection").Users;

var userService = {};

userService.list = () => {
    return User.findAll({ where: { is_admin: 0 } })
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

// Create user profile
userService.register = (userObj) => {
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            console.log(userObj);
            throw error;
        })
};

// Read user profile
userService.login = (userObj) => {
    return User.findOne({ where: userObj })
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

// Update user profile
userService.update = (userObj) => {
    return User.update({ email: userObj.email}, { where: { id: userObj.id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// Delete user profile
userService.delete = (userId) => {
    return User.destroy({ where: { id: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = userService;