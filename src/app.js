const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./api");
const bodyParser = require("body-parser");

global.__basedir = __dirname;

app.use(bodyParser.json());
app.use("/", api);

app.listen(process.env.APP_PORT, () => {
    console.log("REST API listening in port " + process.env.APP_PORT);
});

module.exports = app;