const { log } = require("console");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hello console");
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
