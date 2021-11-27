const express = require("express");
const router = express.Router();
router.use(express.json());

const prod = require("../products_details");

router.get("/",(req,res)=> res.send("Product Page"));

router.post("/add",(req,res)=> {
    const prod_data = req.body;

    prod.push(prod_data);
    res.json({data:prod});
});

router.post("/retrieve",(req,res)=> {
    res.json({data:prod});
});

router.post("/update",(req,res)=> {
    const prod_ctgry = req.body;
    
    prod[3]=prod_ctgry;
    res.json({data:prod});
});
router.post("/delete",(req,res)=> {
    const prod_data = req.body;

    prod.pop(prod_data);
    res.json({data:prod});
});