const express = require("express");
const app = express();
const posts = require("./posts");

app.get("/", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

app.get("/posts", (_req, res) => {
  res.send(posts);
});

app.listen(4000, () => {
  console.log("app listening on http://localhost:4000");
});
