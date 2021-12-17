const { Sequelize } = require('sequelize');
const db = require("../config/dataBase");

const User = db.define("user", { //1er parámetro es el nombre del proyecto, el 2do son las carac
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    email: Sequelize.STRING(50),

    password: Sequelize.STRING(90),

    salt: Sequelize.STRING(60),

    }
);

module.exports = User;