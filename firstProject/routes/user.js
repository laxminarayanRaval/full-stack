const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/login', (req, res) => res.send('login page'));

module.exports = router;