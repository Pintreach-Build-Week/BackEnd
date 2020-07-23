const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secret");
const Users = require("./auth-model");

const router = express.Router();

// GET a list of all authorized users
router.get("/users", async (req, res, next) => {
  try {
    res.status(200).json(Users.find());
  } catch (err) {
    next(err);
  }
});

// GET authorized users by their id
router.get("/users/:id", async (req, res, next) => {
  try {
    res.status(200).json(await Users.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// this POST endpoint will allow you to register a new user
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    // this checks if a username is already taken
    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }

    // this creates a new user while encrypting the password for security
    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

// Allows a registered user to login and will provide a token to place
// in the authorization header
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    Users.findBy({ username }).then((user) => {
      if (user && bcrypt.compare(password)) {
        const token = getJWT(user.username);

        res.status(200).json({
          message: `Welcome ${user.username}! Here is a token...`,
          token,
        });
      } else {
        res.status(401).json({
          message: "Invalid credentials",
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

function getJWT(username) {
  const payload = {
    userId: username.id,
    username: username.username,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
