const express = require("express");
const router = express.Router();

//Se importa los controladores
const putUpdateController = require("../controllers/upload/updateController");

//Rutas para la subida de imágenes
router.put("/update/:id", putUpdateController.putUpdate);

module.exports = router;