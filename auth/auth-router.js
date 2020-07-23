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
