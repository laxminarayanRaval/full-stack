const express = require("express");
const router = express.Router();
router.use(express.json);

router.get("/list",(req,res) => {
    res.json({data:["iPhone 13","One Plus 9R","Samsung S21 Ultra"]});
});

module.exports = router;