const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  add,
};

//find user
function find() {
  return db("users").select("id", "username");
}

//Will filter to find specific user
function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}

//Find user by their id
function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

//creates a new user
async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}
