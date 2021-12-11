const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "hjcssyqov",
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

module.exports = cloudinary;