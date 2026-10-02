const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const AuthUser = require('./auth-model');
const generateToken = require('../auth/generate-token')

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
  let { username, password } = req.body

  AuthUser.findBy({ username })
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      
      const token = generateToken(user)
      
      res.status(200).json({ 
        message: `Welcome ${user.username}!`,
        token: token   
      });
    } else {
      res.status(401).json({ message: 'YOU SHALL NOT PASS!' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
})

module.exports = router;
