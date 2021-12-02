const fs = require("fs-extra");
const cloudinary = require("../../config/cloudinary");
const Image = require("../../models/imageUpload");

// Actualizar una imagen por id
exports.putUpdate = async (req, res) => {

    try {

        const { id } = req.params;

        //Verificamos que id sea un número
        if (!parseInt(id, 10)) {
            res.status(413).json({ 'Error': 'Se esperaba un número' });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        let type = req.file.mimetype;
        let title = (req.body.title).toUpperCase();
        let name = req.file.originalname;
        let size = req.file.size;
        let description = (req.body.description).toUpperCase();
        let section = (req.body.section).toUpperCase();
        let thematic = (req.body.thematic).toUpperCase();
        let imageURL = result.url;
        let public_id = result.public_id;

        // Actualizo con los datos enviados por post            
        const updateImage = await Image.update({
            type,
            title,
            name,
            size,
            description,
            section,
            thematic,
            imageURL,
            public_id,
        },
            { where: { id: id } });

        await fs.unlink(req.file.path); //para eliminar el archivo de la carpeta upload
        res.status(200).json("La imagen " + updateImage.title + " fue actualizada exitosamente.");


    } catch (e) {
        console.error(e.message);
        res.status(413).json({ "Error ": e.message });
    }

}