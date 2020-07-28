
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, article: 'This is an article placeholder'},
      ]);
    });
};
