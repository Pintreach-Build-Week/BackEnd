exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('articles').truncate()
  
  await knex('articles').insert([
    { id: 1, 
      title : "Article 1 title placeholder",
    url: "http://www.article-place.com",  
    author: "John Doe",
    categories: {
      tech: 'tech',
      diy: 'diy'
    },
    notes: "Notes go here",
    user_ID: 1
    },
    {
      id: 2,
      title: "Article 2",
      url: "http://www.somewhere.com",
      author: "Jane Foster",
      categories: "astrophysics",
      notes: "space notes",
      user_ID: 1
    }
  ])
};
