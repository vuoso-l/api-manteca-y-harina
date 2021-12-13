const express = require('express');
const path = require("path");
//const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const helmet = require("helmet");
const cors = require('cors');

const app = express();

//settings
const port = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/public")));

//Habilitar Cors
app.use(cors());

//Middlewares
//app.use(morgan("dev")); //sirve para ver cada paso que se va recorriendo en la web
app.use(express.json());
app.use(express.urlencoded({extended: false }));

const imageFilter = (req, file, cb) => { //para que solo se suban img
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };

const storage = multer.diskStorage({
    destination: path.join(__dirname, "img/uploads"), //establecer ubicación donde se guardan de las imágenes subidas
    filename: (req, file, cd) => {
        cd(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase()); //creo de forma automática el nombre usando la extensión        
    }
});
app.use(multer({ storage, fileFilter: imageFilter }).single("image"));

//Routes
app.use(require("./routes/homeRoute"));
app.use(require("./routes/deleteUploadRoute"));
app.use(require("./routes/getImagesRoute"));
app.use(require("./routes/uploadRoute"));
app.use(require("./routes/updateRoute"));

app.use(helmet());

//Servidor
app.listen(port, host, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});