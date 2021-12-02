const express = require("express");
const router = express.Router();

//Se importa los controladores
const homeController = require("../controllers/homeController");

//Rutas para la subida de imágenes
router.get("/", homeController.getHomePage);

module.exports = router;