const express = require("express");
const router = express.Router();
const authentication = require("../config/authentication");

//Se importa los controladores
const uploadController = require("../controllers/upload/uploadController");

//Rutas para la subida de imágenes
router.post("/upload", authentication, uploadController.postUpload);

module.exports = router;

