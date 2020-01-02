var express = _require("express");
var PORT = process.env.PORT || 3000;
var app = express();

//connect to public folder
app.use(express.static("./public"));

//parse app
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Listen on port: " + PORT);

app.use(timeout(15000));
app.use(haltOnTimedout);
    function haltOnTimedout(req, res, next) {
        if (!req.timedout) next();
    }
});