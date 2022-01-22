const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/api')


app.use(cors());
app.use(express.json());

app.use('/',api)

const port = 4000;
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})