const jwt = require('jsonwebtoken')
const secret = require('../config/secrets')


module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });
};
