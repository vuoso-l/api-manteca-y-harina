const crypto = require("crypto");
const User = require("../../models/user");

exports.postRegister = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("No enviaste todos los datos requeridos");
    }

    //Si está todo ok, encripto la clave
    crypto.randomBytes(16, (err, salt) => {
        const newSalt = salt.toString("base64");
        crypto.pbkdf2(password, newSalt, 10000, 64, "sha1", async (err, key) => {

            try {

                const encryptedPassword = key.toString("base64");
                const user = await User.findOne({ where: { email } });
                if (user) {
                    return res.send("Usuario existente");
                }
                const userCreated = await User.create({
                    email,
                    password: encryptedPassword,
                    salt: newSalt,
                });
                res.status(200).json("El usuario " + userCreated.email + " fue creado exitosamente.");

            } catch (e) {
                console.error(e.message);
                res.status(413).send({ "Error": e.message });
            }

        })
    })

};