const db = require('../data/dbConfig.js')

module.exports = {
    getArticles,
    getArticle,
    addArticle,
    delArticle,
}

function getArticles  () {
    return db('articles')
}

function getArticle(id) {
    return db("articles").where({ id })
 }
 function addArticle(recipe) {
    return db("articles").insert(article)
 }
function delArticle(id) {
    return db("articles").where("id", id).del()
}