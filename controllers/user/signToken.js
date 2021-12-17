const jwt = require("jsonwebtoken");

const signToken = (id, email) => {

    return jwt.sign({ id, email }, "secret", { expiresIn: 60 * 60 });
}

module.exports = signToken;