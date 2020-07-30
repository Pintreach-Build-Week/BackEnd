exports.up = async function (knex) {
  await knex.schema.createTable("articles", (articles) => {
    articles.increments(); //auto creates id
    articles.text("title").notNull().unique();
    articles.text("url").notNull().unique();
    articles.text("author").notNull();
    articles.text("categories").notNull();
    articles.text("notes").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("articles", (table) => {
    table.dropColumn("title");
    table.dropColumn("url");
    table.dropColumn("author");
    table.dropColumn("categories");
    table.dropColumn("notes");

  });

};
