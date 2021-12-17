const express = require("express");
const router = express.Router();

//Se importa los controladores
const register = require("../controllers/user/register");

//Ruta para el registro de usuario
router.post("/registro", register.postRegister);

module.exports = router;