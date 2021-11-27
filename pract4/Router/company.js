const express = require("express");
const router = express.Router();
router.use(express.json());

const comp = require("../companies_detalis");

router.get("/",(req,res)=> res.send("Company Page"));

router.post("/add",(req,res)=> {
    const comp_data = req.body;

    comp.push(comp_data);
    res.json({data:comp});
});

router.post("/retrieve",(req,res)=> {
    res.json({data:comp});
});

router.post("/update",(req,res)=> {
    const comp_prodid = req.body;

    comp[2]=comp_prodid;
    res.json({data:comp});
});
router.post("/delete",(req,res)=> {
    const comp_data = req.body;
    
    comp.pop(comp_data);
    res.json({data:comp});
});