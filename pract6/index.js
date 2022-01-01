const express = require('express');
const app = express();
const port = 3000;

const CarCate = require('./Router/CarCateRouter');
const CarDetail = require('./Router/CarDetailsRouter');

const mongose = require('mongoose');
require('dotenv').config();

mongose.connect(process.env.MongoseUrl).then((req, res) => console.log("connect"));

app.use("/CarCate", CarCate);
app.use("/CarDetail", CarDetail);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
