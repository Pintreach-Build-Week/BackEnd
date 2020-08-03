const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secret");
const Users = require("./auth-model");

const router = express.Router();

// GET a list of all authorized users
router.get("/users", async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (err) {
    next(err);
  }
});

// GET authorized users by their id
router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// this POST endpoint will allow you to register a new user

router.post("/register", async (req, res, next) => {
  // implement registration
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }

    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  // implement login
  try {
    const { username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then((user) => {
        if (user && bcrypt.compare(password, user.password)) {
          const token = getJWT(user.username);

          res.status(200).json({
            message: `Welcome ${user.username}! Your user id number is ${user.id}. Here is a token...`,
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
