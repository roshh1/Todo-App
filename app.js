const express = require("express");
const bodyParser = require('body-parser');
const listControler = require('./controllers/list');

var app = express();

app.set("view engine", "ejs");

app.use(express.static('./public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// fire controllers
listControler(app, urlencodedParser);

//==== listning port===//
app.listen(3000, ()=>{
  console.log("server running in port 3000!");
});