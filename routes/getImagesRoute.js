const express = require("express");
const router = express.Router();

//Se importa los controladores
const sectionImages = require("../controllers/getImages/getImages");

//Rutas para obtener imágenes
router.get("/images", sectionImages.getImages);

module.exports = router;
