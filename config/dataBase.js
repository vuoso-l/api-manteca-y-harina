const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Conectar con el servidor y crear el modelo en la DB
db.authenticate()
    .then(() => {
        db.sync()
            .then(() => console.log('Conectado al Servidor Mysql'))
            .catch(error => console.log(error.message));
    })
    .catch((error) => console.log(error.message))


module.exports = db;

