const axios = require("axios");


axios.get("https://restcountries.com/v3.1/all").then(result => {

    console.log(result.data[1].name.common);

}).catch(err => {
    console.log(err);
})