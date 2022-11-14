const { Router } = require("express");
const db = require("../database/DatabaseManager");
const router = Router();

router.get('/', (_, res) => res.status(200));

router.post('/', async (req, res) => {
    const username = req.query.username;
    const email = req.query.email;
    const password = req.query.password;

    db.insertUser(username, email, password).then(r => res.status(200).json(r));
});

module.exports = router;