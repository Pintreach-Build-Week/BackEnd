const express = require("express");
const router = express.Router();
const Articles = require("./article-model");

// crud routers go here

// ADD NEW ARTICLE

router.post("/post", (req, res) => {
     
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

//GET ALL ARTICLES  
router.get("/", async (req, res, next) => {
    try {
        res.json(await Articles.getArticles());

    } catch(err) {
        next(err)
    }

})

// UPDATE ARTICLE
router.put('/:id', (req, res) => {
    const article = req.body;
    Articles.updateArticle(req.params.id, article)
    .then( response => {
        if(response === 0){
            return res.status(500).json({ 
                "Message" : "Can't update article at" + req.params.id
            })
        } else {
            res.status(200).json({
                "Message" : "Update Article Successful"
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            "Message" : "Server, Error",
            "Error" : err
        })
    })
})


router.delete("/:id", (req, res) => {
    const { id } = req.params

    Articles.delArticle(id)
    .then (del => {
        res.status(204).end()
    })
    .catch( err => {
        console.log("Error", err)
    })
})



module.exports = router;