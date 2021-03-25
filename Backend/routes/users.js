const express = require('express');
const router = express.Router();
const usersModel = require('../models/users');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require('../utils/utils.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a g resource');
});
router.post('/register', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const userdata = new usersModel ({
      userid:req.body.userid,
      username:req.body.username,
      email: req.body.email,
      password: hash
    });
    userdata.save().then(result => {
      res.status(201).json({
        message: "Registration Successful!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Invalid authentication credentials!"
      });
    });
  });
});

router.post('/login', (req,res,next) => {
  let fetchedUser;
  usersModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      else {
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
           util.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id
        });
      }
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
});

router.get('/getallusers', (req,res,next) => { 
  usersModel.find({})
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "No users Found!"
        });
      }
      res.status(200).json({
        users: user
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Error!"
      });
    });
});

module.exports = router;
