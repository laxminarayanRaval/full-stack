const express = require('express');
const app = express();
const port = 4000;
require('dotenv').config();

const mongoose = require('mongoose');

const Product = require('./Router/ProductRouter');
const Company = require('./Router/CompanyRouter');
const Seller = require('./Router/SellerRouter');

mongoose.connect(process.env.MONGOOES_URL).then(()=>console.log("connected "));

app.use('/Product',Product);
app.use('/Company',Company);
app.use('/Seller',Seller);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
