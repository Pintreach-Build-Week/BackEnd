const express = require("express");
const router = express.Router();
const Articles = ("../article-model")

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
              "An error occured while trying to get the articles from the database.",
            error: err
        })
    })
})


// ADD NEW ARTICLE

router.post("/articles", (req, res) => {
    const articleData = req.body
    Articles.addArticle(articleData)
    .then(newArticle => {
        res.status(201).json({
            message: "New article added to the database",
            id: newArticle
        })
    })
    .catch(err => {
        res.status(500).json({
            message:
            "An error occured while trying to get the articles from the database.",
          error: err
        })
    })
})


router.delete("/recipes/:id", (req, res) => {
    const { id } = req.params

    Recipes.delRecipe(id)
    .then (del => {
        res.status(204).end()
    })
    .catch( err => {
        console.log("Error", err)
    })
})


module.exports = router;
