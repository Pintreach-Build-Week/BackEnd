const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model");

const router = express.Router();

//GET a list of all authorized users
router.get("/users", async (req, res, next) => {
  try {
    res.status(200).json(Users.find());
  } catch (err) {
    next(err);
  }
});

//GET authorized users by their id
router.get("/users/:id", async (req, res, next) => {
  try {
    res.status(200).json(await Users.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

//this POST endpoint will allow you to register a new user
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    //this checks if a username is already taken
    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }

    //this creates a new user while encrypting the password for security
    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
