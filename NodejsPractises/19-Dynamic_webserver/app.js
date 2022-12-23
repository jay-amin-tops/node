const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const geocode = require("./util/geocode");
const weatherdata = require("./util/weatherdata")
const PORT = 3000;


const viewPath = path.join(__dirname, "./templetes/views");
const partialpath = path.join(__dirname, "./templetes/partials");
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));
//console.log(viewPath)
//console.log(publicPath);

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialpath);

app.get("/", (req, resp) => {

    resp.render("index", { "title": "Tops" });

})

app.get("/home", (req, resp) => {

    resp.render("home");

})

app.get("/weather", (req, resp) => {


    resp.render("weather");

})

app.get("/getWdata", (req, resp) => {

    var location = req.query.location;
    if (!location) {
        console.log("location not found!!")
        return;
    }

    geocode.geoCode(location, (err, data) => {
        if (err) {
            console.log(err);
        }

        var lat = data.lat;
        var lng = data.lng;

        weatherdata.getWeatherData(lat, lng, (data1) => {
            //     console.log(`

            //     City : ${location}
            //     Lat : ${lat}
            //     Lng : ${lng}
            //     Temp : ${data1.temp}
            //     Pressure : ${data1.presuure}
            //     Humidity : ${data1.humidity}

            //   `
            //     )

            resp.send({
                City: location,
                Lat: lat,
                Lng: lng,
                Temp: data1.temp,
                Pressure: data1.presuure,
                Humidity: data1.humidity
            })

        });

    })



})


app.listen(PORT, (req, resp) => {
    console.log(`server running on port http://localhost:${PORT}`);
})


