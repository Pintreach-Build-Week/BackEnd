exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();

  await knex("users").insert([
    { id: 1, username: "Darcy Lewis", password: "MewMew" },
  ]);
};
