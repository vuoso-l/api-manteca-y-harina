const Image = require("../../models/imageUpload");

//Enlace al form para subir img
exports.getUpload = async(req, res) => {

    try {

        const image = await Image.findAll();
        
        res.status(200).json({image});             

    } 
    catch (error) {

        console.error(error.message);
        res.status(413).json({ "Error ": error.message });

    }
};