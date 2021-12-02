const express = require("express");
const router = express.Router();

//Se importa los controladores
const uploadController = require("../controllers/upload/uploadController");
const getUploadController = require("../controllers/upload/getUploadController");

//Rutas para la subida de imágenes
router.get("/upload", getUploadController.getUpload);
router.post("/upload", uploadController.postUpload);

module.exports = router;

