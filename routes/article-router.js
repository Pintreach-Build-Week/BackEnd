const express = require("express");
const router = express.Router();
const Articles = ("./article-model.js")

// routers go here

//GET ALL ARTICLES  

router.get("/articles", (req, res) => {
    Articles.getArticles()
    .then(articles => {
        res.status(200).json(articles)
    })
    .catch(err => {
        res.status(500).json({
            message:
              "An error occured while trying to get the recipes from the database.",
            error: err
        })
    })
})


module.exports = router;
