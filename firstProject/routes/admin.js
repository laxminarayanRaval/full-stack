const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/admins", (req, res) => {
  res.json([
    { id: 1, user: "laxminarayan", role: "admin" },
    { id: 2, user: "Ajun", role: "sub-admin" }
  ]);
});

module.exports = router;
