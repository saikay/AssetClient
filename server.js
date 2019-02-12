const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose")
const bodyParser  = require("body-parser")
PORT = process.env.PORT || 3000;
const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/assets";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
db = require("./models");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));


require("./routes/htmlRoutes")(app,db);

app.listen(PORT,function(){
    console.log("Server connected to PORT: " + PORT);
})