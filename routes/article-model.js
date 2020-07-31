const db = require("../data/dbConfig");

module.exports = {
  getArticles,
  getArticle,
  getArticleByUser,
  addArticle,
  delArticle,
  updateArticle,
};

function getArticles() {
  return db("articles");
}

function getArticle(id) {
  return db("articles")
    .select("id", "title", "url", "author", "categories", "notes")
    .where({ id })
    .first();
}

function getArticleByUser(user_ID) {
  return db("articles").where({ user_ID });
}
function addArticle(article) {
  return db("articles").insert(article);
}
function delArticle(id) {
  return db("articles").where("id", id).del();
}

function updateArticle(id, changes) {
  return db("articles").where({ id }).update(changes);
}
