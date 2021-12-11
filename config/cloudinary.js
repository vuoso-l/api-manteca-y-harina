const cloudinary = require("cloudinary").v2;

cloudinary.config({
    CLOUD_NAME: CLOUD_NAME,
    CLOUD_API_KEY: CLOUD_API_KEY,
    API_SECRET: CLOUD_API_SECRET,
});

module.exports = cloudinary;