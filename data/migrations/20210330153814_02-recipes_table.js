
exports.up = async function(knex) {
  await knex.schema
  .createTable("recipes", (recipes) => {
      recipes.increments("id")
      recipes.string("title")
      recipes.string("source")
      recipes.string("ingredients")
      recipes.string("instructions")
      recipes.string("category")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
