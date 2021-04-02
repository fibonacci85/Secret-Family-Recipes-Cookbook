exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          title: "Hard Boiled Egg",
          source: "Mom",
          ingredients: "egg,water",
          instructions: "boil egg in water for 12 minutes, remove and let cool",
          category: "Snack"
        },
        {
          title: "Scrambled Eggs",
          source: "Dad",
          ingredients: "egg,oil,salt,pepper",
          instructions: "heat frying pan on medium with desired oil, crack 2-3 eggs onto surface, salt, let cook for 3-4 mins, scramble!",
          category: "Breakfast"
        },
        {
          title: "Hot Tea",
          source: "Grandma",
          ingredients: "Water, Tea",
          instructions: "Put tea bag in hot water",
          category: "Breakfast"
        }
      ]);
    });
  };
