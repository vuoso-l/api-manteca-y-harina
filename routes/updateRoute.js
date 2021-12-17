const express = require("express");
const router = express.Router();
const authentication = require("../config/authentication");

//Se importa los controladores
const putUpdateController = require("../controllers/upload/updateController");

//Rutas para la subida de imágenes
router.put("/update/:id", authentication, putUpdateController.putUpdate);

module.exports = router;