
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('articles').truncate()
  
  await knex('articles').insert([
    { id: 1, article: "this is an article placeholder"}
  ])
};
