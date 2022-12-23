const axios = require('axios');


const getWeatherData = (lat, lon, callback) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c78a76af15cc5843caa7b5f44e1623e&units=metric`;


    axios.get(url).then((result) => {

        var city = result.data.name
        var main = result.data.main;

        var temp = main.temp;
        var pressure = main.pressure;
        var humidity = main.humidity;

        callback({

            "city": city,
            "temp": temp,
            "presuure": pressure,
            "humidity": humidity
        })

        //     console.log(`

        //     City : ${city}
        //     Temp : ${temp}
        //     Pressure : ${pressure}
        //     Humidity : ${humidity}
        // `)


    }).catch((err) => {
        console.log((err))
    })

}

module.exports = { getWeatherData }