const express = require('express');
const router = express.Router();
router.use(express.json());

const mongoose = require('mongoose');
const SellerModal = require('../Modal/SellerModal');
const ProductModal = require('../Modal/ProductModal');

router.post('/', (req, res) => {
    return res.json({ data: 'seller Page ...' });
});

router.post('/AddSeller', (req, res) => {
    const record = req.body;
    SellerModal.create(record);
  
    return res.json({ data: 'Seller Data Add Sucessfully .....' });
});

router.get('/Display/AllProduct/:Name', async (req, res) => {
    const name = req.params.Name;
    const dt = await SellerModal.find({ Name: name });
    const list = await ProductModal.find({ ProductId: dt[0].ProductId });
  
    return res.json({ data: list });
});

router.put('/UptSeller/:SellerId', async (req, res) => {
    const id = req.params.SellerId;
    const data = req.body;
    console.log(data);
    const update = await SellerModal.findOneAndUpdate({ SellerId: id }, data, { new: true });
  
    return res.json({ data: 'Seller Data Update Sucessfully .....' });
});

router.delete('/DelSeller/:SellerId', async (req, res) => {
    const id = req.params.SellerId;
    const del = await SellerModal.findOneAndDelete({ SellerId: id }, (e) => {
        if (e)
            console.log("expection ..", e);
    });
  
    return res.json({ data: 'Seller Data delete Sucessfully .....' });
});

module.exports = router;
