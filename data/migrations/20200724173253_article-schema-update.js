exports.up = async function (knex) {
    await knex.schema.createTable("articles", (table) => {
      table.increments(); //auto creates id
      table.text("article").notNull().unique();
    });
  };
  
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("articles");
    table.dropColumn("article");
  };
  