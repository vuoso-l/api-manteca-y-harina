const jwt = require("jsonwebtoken");

const signToken = (id) => {

    return jwt.sign({ id }, "secret", { expiresIn: 60 * 15 });
}

module.exports = signToken;