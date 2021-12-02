const Image = require("../../models/imageUpload");

exports.getImages = async(req, res) => {
    
    try {

        const image = await Image.findAll();

        if (image.length === 0) {
            return res.status(404).json({message: "No hay imágenes registradas"});
        } 
        else {
            return res.status(200).json({image});
        }                    

    } catch (error) {

        console.error(error.message);
        res.status(413).json({ "Error": error.message });

    }

};
