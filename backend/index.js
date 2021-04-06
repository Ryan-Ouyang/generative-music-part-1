const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.send("This app is online.");
});

app.post("/hash", (req, res) => {
  console.log("Got body:");
  console.log(req.body);

  res.send("Success.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
