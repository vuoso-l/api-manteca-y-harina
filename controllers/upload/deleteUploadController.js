const cloudinary = require("../../config/cloudinary");
const images = require("../../models/imageUpload");

exports.deleteUpload = async(req, res) => {
    
    try { 
        
        const {id} = req.params;
        const image = await images.findByPk(id);                
        
        await images.destroy({where:{id: id}});
        await cloudinary.uploader.destroy(image.public_id);
        res.status(200).json("La imagen " + image.title + " fue eliminada exitosamente.");

    } catch (e) {
        console.error(e.message);
        res.status(413).json({ "Error ": e.message });
    }
};