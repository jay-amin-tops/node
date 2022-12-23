var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result => {

        for (var i = 0; i < result.length; i++) {
            console.log(result[i])
        }


    })
    .catch(error => console.log('error', error));

// fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
//     .then(response => response.json())
//     .then(result => {

//         for (var i = 0; i < result.length; i++) {
//             console.log(result[i])
//         }


//     })
//     .catch(error => console.log('error', error));

// fetch("https://api.countrystatecity.in/v1/countries/IN/states/GJ/cities", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//         for (var i = 0; i < result.length; i++) {
//             console.log(result[i])
//         }
//     })
//     .catch(error => console.log('error', error));