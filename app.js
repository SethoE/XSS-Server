var express = require("express");
var path = require("path");

var routes = require("./routes"); // defines routes


var app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000); // defines port
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));


app.use(routes);
app.listen(app.get("port"), function() { 
    
});