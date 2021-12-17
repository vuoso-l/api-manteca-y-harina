const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    dialect: "mysql",
    port: process.env.BD_PORT,
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
        db.sync(/* { alter: true } */)
            .then(() => console.log('Conectado al Servidor Mysql'))
            .catch(error => console.log(error.message));
    })
    .catch((error) => console.log(error.message))


module.exports = db;

