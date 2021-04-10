const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json({ extended: true }));

const port = 3001;
app.use(cors());

app.get("/", (req, res) => {
  res.send("This app is online.");
});

app.get("/hash", (req, res) => {
  crypto.randomBytes(32, function (err, buffer) {
    if (err) {
      console.error(err);
      res.error(err);
    }

    var token = buffer.toString("hex");
    res.json({ hash: "0x" + token });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
