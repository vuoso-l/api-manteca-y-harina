const express = require("express");
const router = express.Router();

//Se importa los controladores
const uploadController = require("../controllers/upload/uploadController");

//Rutas para la subida de imágenes
router.post("/upload", uploadController.postUpload);

module.exports = router;

