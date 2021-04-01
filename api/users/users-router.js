const router = require("express").Router();
const Users = require("./users-model.js");
const { restricted } = require('../auth/auth-middleware')

//get users
router.get("/", (req, res) => { // add restricted
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
})

//add user
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.users.user_id //need to differentiate user_id's ??
        const data = await Users.insert(req.body);
        res.json(data);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router;