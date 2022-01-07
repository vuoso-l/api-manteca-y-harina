const fs = require("fs-extra");
const cloudinary = require("../../config/cloudinary");
const Image = require("../../models/imageUpload");

// Actualizar una imagen por id
exports.putUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    //Verificamos que id sea un número
    if (!parseInt(id, 10)) {
      res.status(413).json({ Error: "Se esperaba un número" });
    }

    let image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).send({ Error: "Imagen no encontrada." });
    }

    await cloudinary.uploader.destroy(image.public_id);

    const result = await cloudinary.uploader.upload(req.file.path);

    const data = {
        type: req.file.mimetype,
        title: req.body.title.toUpperCase(),
        name: req.file.originalname,
        size: req.file.size,
        description: req.body.description.toUpperCase(),
        section: req.body.section.toUpperCase(),
        thematic: req.body.thematic.toUpperCase(),
        imageURL: result.url,
        public_id: result.public_id,
    }
    // Actualizo con los datos enviados por post
    image = await Image.update(data, { where: { id } })

    await fs.unlink(req.file.path); //para eliminar el archivo de la carpeta upload
    res
      .status(200)
      .json("La imagen fue actualizada exitosamente.");
  } catch (e) {
    console.error(e.message);
    res.status(413).json({ "Error ": e.message });
  }
};
