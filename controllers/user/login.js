const crypto = require("crypto");
const User = require("../../models/user");
const signToken = require("./signToken");

exports.postLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("No enviaste todos los datos");
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.send("Usuario y/o contraseña incorrecta");
        }
        crypto.pbkdf2(password, user.salt, 10000, 64, "sha1", (err, key) => {
            const encryptedPassword = key.toString("base64");
            if (user.password === encryptedPassword) {
                const token = signToken(user.id);
                return res.send({ token });
            }
            return res.send("Usuario y/o contraseña incorrecta");
        })

    } catch (e) {
        console.error(e.message);
        res.status(413).send({ "Error": e.message });
    }
};