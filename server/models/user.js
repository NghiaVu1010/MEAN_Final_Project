'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('USERS', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        is_admin: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0
        },
    }, {
        tableName: 'Users'
    });
};