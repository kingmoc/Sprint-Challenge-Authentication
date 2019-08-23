const jwt = require('jsonwebtoken')
const secret = require('../config/secrets')


module.exports = function generateToken(user) {
    const payload = {
      subject: user.id, 
      username: user.username,
    };

    const options = {
      expiresIn: '1d',
    };

    return jwt.sign(payload, secret.jwtSecret, options)

  } 