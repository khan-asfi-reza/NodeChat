const dotenv = require('dotenv');

dotenv.config();

exports.JWT_SECRET = process.env.JWT_SECRET_KEY;

