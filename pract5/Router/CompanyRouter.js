const express = require('express');
router.use(express.json());

const router = express.Router();
const mongoose = require('mongoose');

const CompanyModal = require('../Modal/CompanyModal');
const ProductModal = require('../Modal/ProductModal');

router.post('/', (req, res) => {
    return res.json({ data: 'Company Page ...' });
});

router.post('/AddCompany', (req, res) => {
    const record = req.body;
    CompanyModal.create(record);
  
    return res.json({ data: 'Company  Data Add Sucessfully .....' });
});

router.get('/Display/AllProduct/:Name', async (req, res) => {
    const name = req.params.Name;
    const dt = await CompanyModal.find({ Name: name });
    const list = await ProductModal.find({ ProductId: dt[0].ProductId });
  
    return res.json({ data: list });
});

router.put('/UptCompany/:CompanyId', async (req, res) => {
    const id = req.params.CompanyId;

    const data = req.body;
    console.log(data);
    const update = await CompanyModal.findOneAndUpdate({ CompanyId: id }, data, { new: true });
  
    return res.json({ data: 'Company Data Update Sucessfully .....' });
});

router.delete('/DelCompany/:CompanyId', async (req, res) => {
    const id = req.params.CompanyId;
    const del = await CompanyModal.findOneAndDelete({ CompanyId: id }, (e) => {
        if (e)
            console.log(e);
    });
  
    return res.json({ data: 'Company Data delete Sucessfully .....' });
});

module.exports = router;
