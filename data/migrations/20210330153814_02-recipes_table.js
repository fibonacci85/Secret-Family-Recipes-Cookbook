
exports.up = async function(knex) {
  await knex.schema
  .createTable("recipes", (recipes) => {
      recipes.increments("recipe_id")
      recipes.string("title")
      recipes.string("source")
      recipes.string("ingredients")
      recipes.string("instructions")
      recipes.string("category")
      recipes
            .integer("id")
            .unsigned()
            .notNullable()
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes")
};
