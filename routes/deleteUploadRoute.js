const express = require("express");
const router = express.Router();

//Se importa los controladores
const deleteUploadController = require("../controllers/upload/deleteUploadController");

//Rutas para la elminación de imágenes
router.delete("/delete/:id", deleteUploadController.deleteUpload );

module.exports = router;