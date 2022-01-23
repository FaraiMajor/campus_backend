const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const db = require("./db");

const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/controllers', require('./controllers/index'))
db.sync().then(() => {
    console.log('db synced')
    app.listen(PORT, () =>
        console.log(`Serving portmanteau since there were ports ${PORT}`)
    )
})