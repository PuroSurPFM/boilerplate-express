require('dotenv').config()
let express = require('express');
let app = express();
// app.get("/", function(req, res) {
app.get("/", (req, res) => {

  res.sendFile(__dirname + "/views/index.html");
});
let message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});

app.use("/public", express.static(__dirname + "/public"));


























 module.exports = app;
