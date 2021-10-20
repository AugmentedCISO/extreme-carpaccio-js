const express = require("express");

const app = express();
app.use(express.json());

app.post("/order", (req, res) => {
  console.log(req.body);
  // Your code here
  res.status(200).json({ total: 0 });
});

app.post("/feedback", (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.post("/ping", (req, res) => {
  console.log(req.body);
  res.status(200).body("pong");
});

app.listen(3051, () => {
  console.log("Server started");
});
