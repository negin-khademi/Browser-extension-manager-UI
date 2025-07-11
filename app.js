const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/v1/extensions", require("./routes/extensionRoutes"));

module.exports = app;
