const express = require("express");
const app = express();
const posts = require("./posts");

app.get("/", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

app.get("/posts", (_req, res) => {
  res.send(posts);
});

// Add blog
app.post("/add", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

// Delete blog
app.get("/delete/:id", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

// Update blog
app.put("/update/:id", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

// Replace blog
app.get("/replace/:id", (req, res) => {
  res.send(`<h1>Placement Assignment - Express.js - Question 1</h1>`);
});

// Listen
app.listen(4000, () => {
  console.log("app listening on http://localhost:4000");
});
