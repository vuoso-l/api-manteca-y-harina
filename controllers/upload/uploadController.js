const fs = require("fs-extra");
const cloudinary = require("../../config/cloudinary");
const Image = require("../../models/imageUpload");

//Rutas para subir img
exports.postUpload = async(req, res) => {
       
    try {   
                    
        const result = await cloudinary.uploader.upload(req.file.path);      
        
        let type = req.file.mimetype;
        let title = req.body.title;
        let name = req.file.originalname;
        let size = req.file.size;
        let description = req.body.description;
        let section = req.body.section;
        let thematic = req.body.thematic;
        let imageURL = result.url;
        let public_id = result.public_id;
            
        const imagenSubida = await Image.create({
            type,
            title,
            name,
            size,
            description,
            section,
            thematic,
            imageURL,
            public_id,
        });        
        
        await fs.unlink(req.file.path); //para eliminar el archivo de la carpeta upload
        res.status(200).json("La imagen " + imagenSubida.title + " fue cargada exitosamente.");  

    } catch (e) {
        console.error(e.message);
        res.status(413).json({ "Error ": e.message });
    }
};