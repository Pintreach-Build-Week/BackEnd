const db = require('../data/dbConfig.js')

module.exports = {
    getArticles,
    getArticle,
    addArticle,
    delArticle,
}

function getArticles  () {
    return db('recipes')
}

function getArticle(id) {
    return db("recipes").where({ id })
 }
 function addArticle(recipe) {
    return db("recipes").insert(recipe)
 }
function delArticle(id) {
    return db("recipes").where("id", id).del()
}