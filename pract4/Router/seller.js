const express = require("express");
const router = express.Router();
router.use(express.json());

const sell = require("../sellers_details");

router.get("/",(req,res)=> res.send("Seller Page"));

router.post("/add",(req,res)=> {
    const sell_data = req.body;

    sell.push(sell_data);
    res.json({data:sell});
});

router.post("/retrieve",(req,res)=> {
    res.json({data:sell});
});

router.post("/update",(req,res)=> {
    const sell_prodid = req.body;
    
    sell[2]=sell_prodid;
    res.json({data:sell});
});
router.post("/delete",(req,res)=> {
    const sell_data = req.body;
    
    sell.pop(sell_data);
    res.json({data:sell});
});