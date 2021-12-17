const jwt = require("jsonwebtoken");

//Middleware del usuario corroborado
const auth = (req, res, next) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            throw new Error("No tenés acceso");
        }

        jwt.verify(token, "secret", (err, decoded) => {

            if (err) {
                throw new Error("Token inválido");
            }
            
            next();
        });


    } catch (e) {
        res.status(413).send({ message: e.message });
    }

}

module.exports = auth;