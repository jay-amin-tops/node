const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("hbs");

const viewPath = path.join(__dirname, "../templetes/views");
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicPath))

app.get("/home", (req, resp) => {
    resp.render("home");
})

app.get("*", (req, resp) => {
    resp.render("error");
})

app.listen(PORT, (req, resp) => {
    console.log(`Server running : http://localhost:${PORT} `);
})

