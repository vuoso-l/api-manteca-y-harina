const jwt = require("jsonwebtoken");

//Middleware del usuario corroborado
const auth = (req, res, next) => {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new Error("No tenés acceso");
        }

        const token = authHeader.split(" ")[1];
        let revisarToken;

        try {
            revisarToken = jwt.verify(token, "secret");                
                        
        } catch (e) {
            res.status(500).json({ message: e.message });
        }

        if (!revisarToken) {
            throw new Error("No autenticado");
        }

        next();

}

module.exports = auth;