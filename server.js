var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();

//connect to public folder
app.use(express.static(__dirname + "./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");
app.use("/" , routes);

app.listen(PORT, function(){
    console.log("Listen on port: " + PORT);

//app.use(timeout(15000));
//app.use(haltOnTimedout);
  //  function haltOnTimedout(req, res, next) {
    //    if (!req.timedout) next();
    });
