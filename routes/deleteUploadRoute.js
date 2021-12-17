const express = require("express");
const router = express.Router();
const authentication = require("../config/authentication");

//Se importa los controladores
const deleteUploadController = require("../controllers/upload/deleteUploadController");

//Rutas para la elminación de imágenes
router.delete("/delete/:id", authentication, deleteUploadController.deleteUpload );

module.exports = router;