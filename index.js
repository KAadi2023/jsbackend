require('dotenv').config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Aadidotcom.json");
});

app.get("/facebook", (req, res) => {
  res.send("<h1>Facebook</h1>");
});

app.get("/instagram", (req, res) => {
  res.send("<h1>Instagram</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}!`);
});
