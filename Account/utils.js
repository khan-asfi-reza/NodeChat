// JWT
const jwt = require('jsonwebtoken');
// Env Variables
const jwt_secret_key = require("../Config/env").JWT_SECRET;

// Creates JWT Token
exports.createToken = (payload) => {
    return jwt.sign(payload, jwt_secret_key)
};

