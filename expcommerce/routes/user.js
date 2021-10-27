const express = require("express");
const router = express.Router();
router.use(express.json);

router.get("/registeration",(req,res) => {
    res.json({data:"user registration page."});
});

router.get("/login",(req,res) => {
    res.json({data:"user login page."});
});

router.get("/forgetpass",(req,res) => {
    res.json({data:"user forget password page."});
});

module.exports = router;