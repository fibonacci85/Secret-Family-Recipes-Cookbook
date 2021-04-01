const express = require('express')
const router = express.Router();
// const { mw } = require("./recipes-middleware");
// const { restricted } = require("../auth/auth-middleware");
// const Recipe = require("./recipes-model");
const Recipes = require('./recipes-model')

// Endpoints

//get recipes
router.get('/', async (req, res) => {
  try {
      const data = await Recipes.find();
      res.json(data);
  } catch (err) {
      res.json({ message: err.message });
  }
});

//get by ID
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Recipes.findBy({ id });
      res.json(data);
  } catch (err) {
      res.json({ message: err.message });
  }
})

//add
router.post('/', async (req, res) => {
  try {
      req.body.creator_id = req.session.user.user_id //changed to creator_id
      const data = await Recipes.insert(req.body);
      res.json(data);
  } catch (err) {
      res.json({ message: err.message });
  }
});

//update
router.put('/:id', async (req, res) => {
  try {
      const body = req.body;
      const { id } = req.params;
      const data = await Recipes.update(id, body);
      res.json(data);
  } catch (err) {
      res.json({ message: err.message });
  }
})


//delete
router.delete('/:id', async(req, res) => {
  try {
      const { id } = req.params;
      const data = await Recipes.remove(id);
      res.json(data);
  } catch(err){
      res.json({message: err.message});
  }
})

module.exports = router;