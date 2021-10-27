const express = require('express');
const user = require("./routes/user");
const admin = require("./routes/admin");

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('First Project!'));
app.use('/user',user);
app.use('/admin',admin);

app.listen(port, () => console.log(`Example app listening on port port!`));