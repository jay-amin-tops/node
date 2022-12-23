const axios = require("axios");





const geoCode = (city, callback) => {

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=d82e7400a4d740cf9137b0ccceaec75f`;

    axios.get(url).then((result) => {
        var data = result.data.results[0].geometry;

        var lat = data.lat;
        var lng = data.lng;

        callback(undefined, {
            "lat": lat,
            "lng": lng
        })


    }).catch(err => {
        console.log(err);
        callback(err,)
    })

}

module.exports = { geoCode };