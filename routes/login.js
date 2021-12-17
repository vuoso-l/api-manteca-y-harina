const express = require("express");
const router = express.Router();

//Se importa los controladores
const login = require("../controllers/user/login");

//Ruta para el registro de usuario
router.post("/login", login.postLogin);

module.exports = router;