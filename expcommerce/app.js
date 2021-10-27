require('dotenv').config

const express = require("express");
const app = express();
app.use(express.json());
const port = 5001;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL).then(() => console.log("mongodb connected"));

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");

app.get("/", (req, res) => res.send("Hello World!!"));

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => console.log("Example app listening on port 5001!"));