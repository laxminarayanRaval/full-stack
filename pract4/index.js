const express = require('express')
const app = express()
const port = 3000

const product = require("./Router/product");
const product = require("./Router/company");
const product = require("./Router/seller");

app.get('/', (req, res) => res.send('Hello World!'));

app.use("/products",product);
app.use("/companies",product);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))