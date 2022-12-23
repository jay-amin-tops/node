const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT = 3000;

const viewPath = path.join(__dirname, "../templetes/views");
//console.log(viewPath);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set("view engine", "hbs");
app.set("views", viewPath);

const Studentrouter = require("../router/studentRouter");
app.use("/", Studentrouter)

mongoose.connect("mongodb://127.0.0.1:27017/TopsStudent").then(() => {
    console.log("Db connected successfully !!!  ")
}).catch(err => {
    console.log(err);
})

app.listen(PORT, (req, resp) => {
    console.log("Server running on port " + PORT);
})