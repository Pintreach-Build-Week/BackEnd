exports.up = async function (knex) {
  await knex.schema.createTable("articles", (table) => {
    table.increments(); //auto creates id
    table.text("title").notNull().unique();
    table.text("url").notNull().unique();
    table.text("author").notNull();
    table.text("categories").notNull();
    table.text("notes").notNull();
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
