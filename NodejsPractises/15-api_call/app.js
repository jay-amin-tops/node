const weather = require("./weatherdata")
const geocode = require("./geocode");

const city = process.argv[2];


const getData = () => {

    geocode.geoCode(city, (err, { lat, lng } = {}) => {

        //var lat = data.lat;
        //var lng = data.lng;
        weather.getWeatherData(lat, lng, (data1) => {
            console.log(`
          
            City : ${data1.city}
            Lat : ${lat}
            Lng : ${lng}
            Temp : ${data1.temp}
            Pressure : ${data1.presuure}
            Humidity : ${data1.humidity}
          
          `
            )
        });


    });


}

getData();



