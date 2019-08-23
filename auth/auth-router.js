const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const AuthUser = require('./auth-model');

router.post('/register', (req, res) => {
  let regUser = req.body

  let hashPassword = bcrypt.hashSync(regUser.password, 8)
  regUser.password = hashPassword

  AuthUser.add(regUser)
    .then(saved => {
    res.status(201).json(saved);
    })
    .catch(error => {
    res.status(500).json(error);
    });

});

router.post('/login', (req, res) => {
  
});

module.exports = router;
