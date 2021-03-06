const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser")

//imports
const restrict = require("../middleware/restrict");
const authRouter = require("../auth/auth-router");
const articleRouter = require("../routes/article-router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use("/api/auth", authRouter);
server.use("/articles", articleRouter);
//This will be the first thing you see when accessing the deployed server
server.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Pintereach-1 API!",
  });
});

//This is a general err message not specific to any endpoint
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong. Please try again...",
  });
});

module.exports = server;
